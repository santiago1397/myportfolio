import React, {useState,useEffect} from 'react'
import {CNavbar, MenuBtn, Ul} from '../styles/NavStyles'


export const Navbar: React.FC = () =>{
    const [menu, setMenu] = useState<boolean>(false)
    const [menuMask, setMenuMask] = useState<boolean>(false)

    const handleScroll = () => {
        if(window.scrollY>= 90){
            setMenuMask(true)
        }else{
            setMenuMask(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return ( 
        <CNavbar active={menu} mask={menuMask}>
            <MenuBtn mask={menuMask} onClick={() =>{setMenu(menu=>!menu); }}>Menu</MenuBtn>
            <Ul active={menu}>
                <li><a href="#Home">home</a></li>
                <li><a href="#About">about</a></li>
                <li><a href="#Skills">skills</a></li>
                <li><a href="#Projects">projects</a></li>
                <li><a href="#Contact">contact</a></li>
            </Ul>
        </CNavbar>
    )

}

export default Navbar;