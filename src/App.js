import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './globalStyles'
import About from './Components/About'
import { inforData, AnimalData, PeopleData, priceData } from './data/InforData';
import Gallery from './Components/Gallery';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Price from './Components/Price';

const App = () => {
	
	return (
		<Router>
			<GlobalStyle />
			<Home  />
			<About {...inforData} />
			<Gallery Heading='People potraits' data={PeopleData} />
			<Feature />
			<Gallery Heading='Animal potraits'  data={AnimalData} />
			<Price Heading='Our Prices' data={priceData} />
			<Footer />
		</Router>
	)
}

export default App;

