import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./locations/Location";
import {EmployeeCard } from "./employees/Employee";
import { CustomerCard } from "./custumers/Customer";
import { AnimalProvider } from "./animals/AnimalProvider"
import { AnimalList } from "./animals/AnimalList"
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
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

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