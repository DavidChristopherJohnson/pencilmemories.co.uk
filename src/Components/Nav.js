import React from 'react'
import { Link as LinkR} from 'react-router-dom'
import { Link as  ScrollLink } from 'react-scroll'
import styled, {css} from 'styled-components/macro'
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
const Logo = styled(LinkR)`
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
const NavMenuLinks = styled(ScrollLink)`
${NavLink}

&.active{
    border-bottom: 3px solid #CD853f;
}
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
           <Logo to='/'>
           <img src={logo} alt='logo' />
           PrimaryDrawing</Logo>
           <MenuBars onClick={toggle}  />
           <NavMenu>
            <NavMenuLinks to='about' >About</NavMenuLinks>
            <NavMenuLinks to='gallery' >Gallery</NavMenuLinks>
            <NavMenuLinks to='contact' >Contact</NavMenuLinks>
           </NavMenu>
           <NavBtn>
               <Button to='footer'>Contact Us</Button>
           </NavBtn>
       </Nav>
    )
}

export default Navbar; 