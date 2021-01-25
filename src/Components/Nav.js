import React from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import Bars from '../assets/img/bars-solid.svg'
import logo from '../assets/icons/favicon32.png'
import { motion } from 'framer-motion'


const Nav = styled(motion.nav)`
height: 60px;
display:flex;
justify-content:space-between;
padding: 1rem 2rem;
position: fixed;
width:100%;
z-index: 100;
background: #000d1a;

@media screen and (max-width: 768px){
    background-color: #CD853f;
}
`
const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height; 100%;
cursor: pointer;
text-decoration: none;
font-size: 1rem;
`
const Logo = styled(Link)`
${NavLink}
font-family: 'Playfair Display', serif;
font-weight: 400;

@media screen and (max-width: 768px){
    color: #000d1a;
}
`
const MenuBars = styled.i`
display: none;

@media screen and (max-width: 768px){
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 45%);
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
  display: none;  
}
`
const NavMenuLinks = styled(Link)`
${NavLink}

&:hover{
    color: #CD853f;
    transition: ease-in .25s;
}
`
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;  
  }
`

const containerVariants = {
    hidden: {
        y: -120,
    },
    visible :{
        y: 0,
        transition:{
            type: 'spring',
            mass: 0.4,
            delay: 0.2
        }
    }
}
const Navbar = ({toggle}) => {
    return (
       <Nav 
       variants= {containerVariants}
       initial= "hidden"
       animate= "visible"
       >
           <Logo>
           <img src={logo} alt='logo' />
           PrimaryDrawing</Logo>
           <MenuBars onClick={toggle}  />
           <NavMenu>
               {menuData.map ((item, index) => (
                   <NavMenuLinks to={item.link} key={index}>
                       {item.title}
                    </NavMenuLinks>
               ))}
           </NavMenu>
           <NavBtn>
               <Button to="/contact">Contact Us</Button>
           </NavBtn>
       </Nav>
    )
}

export default Navbar; 