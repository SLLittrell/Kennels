import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
/*
1.component renders with save button disabled
2.any fetched data needed is envoked with useEffect and rendered such as dropdowns or placholders
3.determine if the url is an edit path use url param and asign url id to a variable.
4.create event to handle input changes and set to state
5.
*/
export const LocationForm = () => {
    const {locations, getLocations, getLocationsById, addLocation, updateLocation} = useContext(LocationContext)

    const [location, setLocations] = useState({
        name: "",
        address: ""
      })
    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true)
    // Now that the form can be used for editing as well as adding an animal, you need access to the animal id for fetching the animal you want to edit
    const { locationId }= useParams()
    const history = useHistory()


    const handleInputChange = (event) => {
        const newLocation = { ...location }
        newLocation[event.target.id] = event.target.value
        setLocations(newLocation)
    }
    

    const clickSaveLocation = () => {
        if (parseInt(location.id) === 0) {
            window.alert("Please select a location")
        }
        else {
            setIsLoading(true);
            if (locationId){
                //PUT - update
                updateLocation({
                    id: location.id,
                    name: location.name,
                    address: location.address
                })
                .then(() => history.push(`/locations/detail/${location.id}`))
            }
            else {
                addLocation({
                    name: location.name,
                    address: location.address
                })
                .then(() => history.push("/locations"))
            }
        }
    }
    useEffect(() => {
        getLocations()
            .then(() => {
                if (locationId){
                    getLocationsById(locationId)
                    .then(local => {
                        setLocations(local)
                        setIsLoading(false)
                    })
                }else{
                    setIsLoading(false)
                }
            })
    }, [])
    return(
        <form className="locationForm">
        <h2> {locationId ? "Update Location" : "New Location"}</h2>
        <fieldset>
            <div className = "locationform-group">
                <label htmlFor="locationName">Location name: </label>
                <input type="text" id="location" required autoFocus className="location-form-control" placeholder={location.name}
                 onChange={handleInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className = "locationform-group">
                <label htmlFor="locationAddress">Location Address: </label>
                <input type="text" id="address"  required className="location-form-control" placeholder={location.address} 
                 onChange={handleInputChange}/>
            </div>
        </fieldset>
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => { event.preventDefault() 
            clickSaveLocation()}}>
            {locationId ? "Save Location" : "New Location"}
          </button>
        </form>
    )
}