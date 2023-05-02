import { NavLink } from "react-router-dom";

export default function NavBar ({ ...props }) {
    return (
        <>
            <nav className="navBar">
                <div className="brand">BRAND</div>
                <div className="links">
                    {props.links.map((x, index) => {
                        return <NavLink key={index} to={x}>
                                    {x.split("/")[1] || "Home"}
                                </NavLink>
                    })}
                </div>
            </nav>
        </>
        
    )
}