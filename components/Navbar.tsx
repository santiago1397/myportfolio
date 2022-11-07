import React, {useState,useEffect} from 'react'
import {CNavbar, MenuBtn, Ul} from '../styles/NavStyles'


export const Navbar: React.FC = () =>{
    const [menu, setMenu] = useState<boolean>(false)
    const [menuMask, setMenuMask] = useState<boolean>(false)
    const [contact, setContact] = useState<boolean>(false)

    const handleScroll = () => {
        if(window.scrollY>= 90){
            setMenuMask(true)
        }else{
            setMenuMask(false)
        }

        if(window.scrollY>= 3500){
            setContact(true)
        }else{
            setContact(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return ( 
        <CNavbar active={menu} mask={menuMask}  >
            <MenuBtn mask={menuMask} onClick={() =>{setMenu(menu=>!menu); }}>Menu</MenuBtn>
            <Ul active={menu} contact={contact}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </Ul>
        </CNavbar>
    )

}

export default Navbar;