import { useEffect, useState } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";


export default ({to,activeTab,style,children}) => {
    const [enter,setEnter] = useState(false)

    const clickHandler = () => {
        if(to === "/"){
            window.scrollTo(0,0)
        }
    }

    return (
    <HashLink
        onMouseEnter={() => setEnter(true)} 
        onMouseLeave={() => setEnter(false)}
        onClick={clickHandler}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start'})}
        to={to} 
        style={{
            textDecoration:"none",
            alignSelf:"end",
            padding:"0.5rem",
            borderRadius: "6px",
            fontFamily: "Poppins",
            backgroundColor: enter === true ? 'blue': activeTab === to ? 'darkblue' : 'transparent',
	    ...style
        }}>
        {children}
    </HashLink>
)}
