import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//for use in other compnents
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
   const [customers, setCustomers] = useState([])

   
    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }
    // debugger

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `Customers` state, `getCustomers` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
//    debugger
   return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}