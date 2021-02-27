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

    // const addCustomer = customerObj => {
    //     return fetch("http://localhost:8088/customers", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(customerObj)
    //     })
    //     .then(getCustomers)
    // }

 
   return (
        <LocationContext.Provider value={{
            locations, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}