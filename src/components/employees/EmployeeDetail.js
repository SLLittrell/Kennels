import React, { useContext, useEffect, useState } from "react"
import {EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployees] = useState({})

	const {employeeId} = useParams();
	const history = useHistory();

  useEffect(() => {
    getEmployeeById(employeeId)
    .then((response) => {
        setEmployees(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__email">{employee.email}</div>
      <div className="employee__location">Location: {employee.location?.name}</div>
      <button className="employee__edit" onClick={() => {
          history.push(`/employee/edit/${employee.id}`)}}>Edit</button>
    </section>
  )
}