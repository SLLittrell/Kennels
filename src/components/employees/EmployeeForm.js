import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { useHistory, useParams } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css"

export const EmployeeForm = () => {
    const {addEmployee, updateEmployee, getEmployeeById} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    const [employees, setEmployees] = useState({
        name: "",
        address: "",
        location_id: 0
      })
    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true)
    // Now that the form can be used for editing as well as adding an animal, you need access to the animal id for fetching the animal you want to edit
    const { employeeId }= useParams()
    const history = useHistory()


    const handleInputChange = (event) => {
        const newEmployee = { ...employees }
        newEmployee[event.target.id] = event.target.value
        setEmployees(newEmployee)
    }
    

    const clickSaveEmployee = () => {
        if (parseInt(employees.location_id) === 0) {
            window.alert("Please select a location")
        }
        else {
            setIsLoading(true);
            if (employeeId){
                //PUT - update
                updateEmployee({
                    id: employees.id,
                    address: employees.address,
                    name: employees.name,
                    location_id: parseInt(employees.location_id),
                })
                .then(() => history.push(`/employees/detail/${employees.id}`))
            }
            else {
                addEmployee({
                    name: employees.name,
                    address: employees.address,
                    location_id: parseInt(employees.location_id),
                })
                .then(() => history.push("/employees"))
            }
        }
    }
    useEffect(() => {
        getLocations()
            .then(() => {
                if (employeeId){
                    getEmployeeById(employeeId)
                    .then(employ => {
                        setEmployees(employ)
                        setIsLoading(false)
                    })
                }else{
                    setIsLoading(false)
                }
            })
    }, [])
    return(
        <form className="EmployeeForm">
          <h2 className="employeeForm__title">{employeeId ? "Save Employee" : "New Employee"}</h2>
          <fieldset>
              <div className="form-employee">
                  <label htmlFor="employeeName">Name: </label>
                  <input type="text" id="name" required autoFocus className="emplyeeForm-control" placeholder={employees.name} 
                  onChange={handleInputChange}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-employee">
                  <label htmlFor="employeeAddress">Address: </label>
                  <input type="text" id="address" required autoFocus className="employeeForm-control" placeholder={employees.address} 
                  onChange={handleInputChange}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-employee">
              <label htmlFor="location">Assign to location: </label>
                  <select value={employees.location_id} id="location_id" className="form-control" onChange={handleInputChange} >
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
            disabled={isLoading}
            onClick={event => { event.preventDefault() 
            clickSaveEmployee()}}>
            {employeeId ? "Save Employee" : "New Employee"}
          </button>
        </form>
    )
}