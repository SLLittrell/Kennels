import React, { useContext, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationForm = () => {
    const {addLocation} = useContext(LocationContext)

    const name = useRef(null)
    const address = useRef(null)

    const history = useHistory()

    const newLocationClicked = (event) => {
        event.preventDefault()

        addLocation({
            name: name.current.value,
            address: address.current.value
        })

        .then(() => history.push("/locations"))
    }
    return(
        <form className="locationForm">
            <h2>New Location</h2>
            <fieldset>
                <div className = "locationform-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="location-form-control" placeholder="Location Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className = "locationform-group">
                    <label htmlFor="locationAddress">Location name: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="location-form-control" placeholder="Location Address" />
                </div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={newLocationClicked}>
            Save Location
          </button>
        </form>
    )
}