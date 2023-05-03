import { NavLink } from "react-router-dom";

export default function NavBar ({ ...props }) {
    return (
        <>
            <nav className="navBar">
                <div className="brand">BRAND</div>
                <div className="linkContainer">
                    {props.links.map((x, index) => {
                        return <NavLink className="link" key={index} to={x}>
                                    {x.split("/")[1] || "Home"}
                                </NavLink>
                    })}
                </div>
            </nav>
        </>
        
    )
}