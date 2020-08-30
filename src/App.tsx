import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function App() {
	return (
		<Router>
			<div className='app-container'>
				<Header />
				<Nav />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
