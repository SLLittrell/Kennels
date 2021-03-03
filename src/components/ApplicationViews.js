import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { LocationForm } from "./locations/LocationForm";
import { CustomerProvider } from "./custumers/CustomerProvider";
import { CustomerList } from "./custumers/CustomerList";
import { AnimalProvider } from "./animals/AnimalProvider";
import { AnimalList } from "./animals/AnimalList";
import { AnimalForm } from "./animals/AnimalForm";
import { AnimalDetail } from "./animals/AnimalDetail";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
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
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}