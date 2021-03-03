import React from "react"
import "./Locations.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
            {location.name}
            </Link></h3>
        <div className="location__employeeNum">{location.employees?.length} emloyees</div>
        <div className="location__animalNum">{location.animals?.length} animals</div>
    </section>
)