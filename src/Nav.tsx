import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink exact to='/' activeClassName='selected'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/about' activeClassName='selected'>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName='selected'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
