import React, { useContext, useEffect, useState } from "react"
import {LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationsById } = useContext(LocationContext)

	const [location, setLocations] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    getLocationsById(locationId)
    .then((response) => {
        setLocations(response)
    })
    }, [])

  return (
    <section className="location">
      <h2 className="location__name">{location.name}</h2>
      <div className="location__address">{location.address}</div>
      <h3>Employees</h3>
      <div className="location__employees">{location.employees?.map(names => names.name).join(", ")}</div>
      <h3>Current Residents</h3>
      <div className="location__resident">{location.animals?.map(aniname => aniname.name).join(", ")}</div>
      <button className="location__edit" onClick={() => {
          history.push(`/locations/edit/${location.id}`)}}>Edit</button>
    </section>
  )
}