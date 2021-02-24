import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animals/AnimalCard"
import "./animals/Animal.css"
export const Kennel = () => {
return (
    <>
        <h2>Nashville Kennels</h2>
        
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
)}