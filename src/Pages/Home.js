import React, {useState} from 'react'
import Nav  from '../Components/Nav'
import Dropdown from '../Components/Dropdown'
import Hero from '../Components/Hero';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
      }
    return (
        <>
        <Nav toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero />
        </>
    )
}

export default Home
