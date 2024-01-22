import './Navbar.css';
import {useState} from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import Logo from "../Navbar/logomain.jpg";

function Navbar() {
    const [isOpen,setOpen] = useState(true);

    const toggleClick = () =>{
        setOpen(!isOpen)
    }
  return (
    <>
        <div className='navContainer'>
            <nav>
                <img src={Logo} className='w-[50px] h-[50px]  rouded-full'/>

                <ul className="navList">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="toggle" onClick={toggleClick}>
                    {isOpen ?<FaBars className='text-black text-2xl '/> :<FaTimes className='text-black text-2xl '/>}
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar