import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function HomePage () {
    let links = [".", "./About", "./Register", "./Login"]
    const [rad, setRad] = React.useState(false)
    const circleRadius = (Math.PI/3) * 6.5
    const circleRotation = 1.14 * 2.815

    return (
        <>
            <NavBar links={links}/>
            <Outlet />
            <div className="spacer"></div>
            { rad && <div className="radialMenu">
                {[...links].map((x, index) => {
                    return <NavLink 
                                key={index} 
                                className={`radialMenuItem r${index}`}
                                to={x}
                                style={{
                                    translate: `${Math.cos((index + circleRotation))*circleRadius}rem
                                                ${Math.sin((index + circleRotation))*circleRadius}rem`,
                                }}
                                onClick={() => setRad(prev => !prev)}
                                >
                                <p>{x.split("/")[1] || "Home"}</p>
                           </NavLink>
                })}
            </div>}
            <button className="menuButton" onClick={() => setRad(prev => !prev)}>MENU</button>            
        </>
        
    )
}