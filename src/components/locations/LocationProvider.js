import React, { useState, createContext } from "react"


export const LocationContext = createContext()

export const LocationProvider = (props) => {
   const [locations, setLocations] = useState([])

   
    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocations)
    }
    // debugger
    const getLocationsById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}`)
            .then(res => res.json())
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    const updateLocation = location => {
        return fetch(`http://localhost:8088/locations/${location.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(location)
        })
          .then(getLocations)
      }

 
   return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, getLocationsById, updateLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}