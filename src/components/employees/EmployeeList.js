import React, { useContext, useEffect } from "react"
import {EmployeeContext} from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employees.css"
import {useHistory} from "react-router-dom"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, []
    )

    const history = useHistory()
    return (
    <>
    <h2>Employees</h2>
      <div className="employees">
        {
          employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)
        }
        <button onClick={() => {history.push("/employees/create")}}>New Employee</button>
      </div> 
    </>
    )
}