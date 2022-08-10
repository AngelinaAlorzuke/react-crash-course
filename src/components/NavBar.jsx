import React from "react" 
import Navitem from "./Navitem";
 
 function NavBar(){
    return (
       <nav className="flex justify-between py-3 px-30 shadow-md">
        <h3 className="font-bold">Gob3Joint</h3>
        <ul className="flex gap-8">
            <Navitem menu="Home"/>
            <Navitem menu="Products"/>
            <Navitem menu="Services"/>
            <Navitem menu="Contact"/>
        </ul>
       </nav>
    )
} 
export default NavBar;