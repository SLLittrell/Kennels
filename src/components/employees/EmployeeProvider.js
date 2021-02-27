import React, { useState, createContext } from "react"


export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
   const [employees, setEmployees] = useState([])

   
    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
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
        <EmployeeContext.Provider value={{
            employees, getEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}