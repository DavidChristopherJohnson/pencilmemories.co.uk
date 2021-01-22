import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav'
import GlobalStyle from './globalStyles'
import Dropdown from './Components/Dropdown'
import Hero from './Components/Hero';
import About from './Components/About'
import { inforData, AnimalData, PeopleData } from './data/InforData';
import Gallery from './Components/Gallery';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

const App = () => {
	const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
	return (
		<>
		<Router>
			<GlobalStyle />
			<Nav toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Hero />
			<About {...inforData} />
			<Gallery Heading='People potraits' data={PeopleData} />
			<Feature />
			<Gallery Heading='Animal potraits' data={AnimalData} />
			<Footer />
		</Router>
		</>
	)
}

export default App

