import React, { useContext, useEffect } from "react"
import {EmployeeContext} from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, []
    )
    return (
    <div className="employees">
      {
        employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)
      }
    </div> 
    )
}