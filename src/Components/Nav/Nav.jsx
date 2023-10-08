import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';


const Nav = () => {


    const [open, setOpen] = useState(false);


    const routesData = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
      ];
      
      

    return (
        <nav >
            <div onClick={()=> setOpen(!open)} className="text-2xl md:hidden"> 
            {
                open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
            }
                
            </div>
            <ul className= {`md:flex absolute duration-1000 ${ open ? "" : "hidden"}`} >
            {
                routesData.map(route => <Navbar key={route.id} route ={route}></Navbar>)
            }
            </ul>
        </nav>
    );
};

export default Nav;