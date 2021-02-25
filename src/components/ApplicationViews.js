import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animals/AnimalCard"
import { LocationCard } from "./locations/Location";
import {EmployeeCard } from "./employees/Employee";
import { CustomerCard } from "./custumers/Customer";
//rerouting to components when nav is clicked
//Route matched with Link on NavBar
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}