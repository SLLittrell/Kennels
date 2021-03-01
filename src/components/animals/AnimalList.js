import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../custumers/CustomerProvider";
import { LocationContext } from "../locations/LocationProvider";
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getLocations()
            .then(getCustomers)
            .then(getAnimals)
    }, []
    )
    return (
    <div className="animals">
      {
        animals.map(animal => {
          const owner = customers.find(cust => cust.id === animal.customerId)
          const location = locations.find(local => local.id === animal.locationId)

          return <AnimalCard key={animal.id}
                  location = {location}
                  customer={owner}
                  animal = {animal} />
        })
      }
    </div> 
    )
}

