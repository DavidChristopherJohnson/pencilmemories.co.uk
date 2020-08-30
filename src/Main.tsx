import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';
import About from './About';
import Home from './Home';
import Contact from './Contact';

function Main() {
	return (
		<main>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</main>
	);
}

export default Main;
