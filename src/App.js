import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav'
import GlobalStyle from './globalStyles'
import Dropdown from './Components/Dropdown'
import Hero from './Components/Hero';

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
		</Router>
		</>
	)
}

export default App

