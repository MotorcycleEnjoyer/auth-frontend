import React from "react";
import { LoginContext } from "../context"
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"

export default function UserPage () {
    const isLoggedIn = React.useContext(LoginContext)
    let links = null

    if (isLoggedIn) {
        links = ["./", "./Documents", "./Orders"]
    }

    if (!isLoggedIn) {
        return (
            <h1>You must be logged in to view this page!</h1>
        )
    }

    return (
        <>
            <NavBar links={links} />
            <Outlet />
        </>
        
    )
}