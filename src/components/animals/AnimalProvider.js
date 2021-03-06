import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//for use in other compnents
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
   const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch(`http://localhost:8088/animals`)
        .then(res => res.json())
        .then(setAnimals)
    }

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}`)
            .then(res => res.json())
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }
    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }
    
    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }

    const [ searchTerms, setSearchTerms ] = useState("")
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById, releaseAnimal, updateAnimal,
            searchTerms, setSearchTerms       
        }}>
            {props.children}
        </AnimalContext.Provider> 
    )
}