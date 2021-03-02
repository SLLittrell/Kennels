import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <p className="animal__breed">{animal.breed}</p>
        <address className="location__address">Location:{location.name}</address>
        <p className="animal__owner">Customer:{customer.name}</p>
    </section>
)
