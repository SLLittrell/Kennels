import React from "react"
// import { AnimalCard } from "./animals/AnimalCard"
// import {CustomerCard} from "./custumers/Customer";
// import { LocationCard } from "./locations/Location"
// import {EmployeeCard} from "./employees/Employee"
// import { PropsAndState } from "./PropsAndState";
// import "./animals/Animal.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
export const Kennel = () =>  (
    <>
        <NavBar />
        <ApplicationViews />
    </>
) 
// {
// return (
//     <>
//         <h2>Nashville Kennels</h2>
        
//         <small>Loving care when you're not there.</small>
//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>
//         <PropsAndState yourName="Stacey" />
//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//         </article>
//         <h2>Customers</h2>
//         <article className="customers">
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//         </article>
//         <h2>Locations</h2>
//         <article>
//             <LocationCard />
//             <LocationCard />
//         </article>
//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeCard />
//             <EmployeeCard />
//             <EmployeeCard />
//         </article>
//     </>
// )}