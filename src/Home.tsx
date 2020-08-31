import React from 'react';
import './Home.scss';

function Home() {
	return (
		<div className='container'>
			<h2>Home</h2>
			<div className='imageContainer'>
				<img
					src='./assets/img/people/HappyCouple.jpg'
					alt='Happy Couple'
				/>
			</div>
		</div>
	);
}

export default Home;
