import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function HomePage () {
    let links = [".", "./About", "./Register", "./Login"]

    return (
        <>
            <NavBar links={links}/>
            <Outlet />
        </>
        
    )
}