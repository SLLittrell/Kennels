import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import "./Employees.css"
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = () => {
    const {addEmployee} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)

    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    const clickNewEmployee = (event) => {
        event.preventDefault()

        //get reference to values
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        }
        else {
            addEmployee
            ({name: name.current.value,
            locationId})
            .then(() => history.push("/employees"))
        }
    }
    return(
        <form className="EmployeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-employee">
                  <label htmlFor="employeeName">Name: </label>
                  <input type="text" id="employeeName" ref={name} required autoFocus className="emplyeeForm-control" placeholder="Name" />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-employee">
              <label htmlFor="location">Assign to location: </label>
                  <select defaultValue="" name="location" ref={location} id="employeeLocation" className="emplyeeForm-control" >
                      <option value="0">Select a location</option>
                      {locations.map(local => (
                          <option key={local.id} value={local.id}>
                              {local.name}
                          </option>
                      ))}
                  </select> 
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={clickNewEmployee}>
            Save Employee
          </button>
        </form>
    )
}