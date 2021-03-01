import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Locations.css"
import { useHistory } from "react-router-dom";

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, []
    )

    const history = useHistory()
    return (
    <div className="locations">
      {
        locations.map(location => <LocationCard key={location.id} location={location} />)
      }
      <button onClick={() => {history.push("/locations/create")}}>New Location</button>
    </div> 
    )
}