import { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";


export default ({to,children}) => {
    const [enter,setEnter] = useState(false)

    return (
    <NavHashLink 
        onMouseEnter={() => setEnter(true)} 
        onMouseLeave={() => setEnter(false)}
        smooth to={to} style={{
            textDecoration:"none",
            margin:"auto",
            color: "grey",
            padding:"0.5rem",
            backgroundColor: enter === true ? 'blue':'transparent',
        }}>
        {children}
    </NavHashLink>
)}