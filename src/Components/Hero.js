import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import Bg from '../assets/img/Bg.jpg'



const HeroSection= styled.div`
height: 100vh;
width: 100%;
max-height: 1100px;
position: relative;
background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
overflow: hidden;
`
const HeroWrapper= styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`
const HeroContent = styled.div`
position: relative;
margin-top: 2rem;
z-index: 10;
display: flex;
flex-direction: column;
align-items: start;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;

h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.6rem;
}
p{
   margin-bottom: 1.5rem;
   text-shadow: 0px 0px 20px rgba(0,0,0,.4); 
}
`


const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <HeroContent>
                 <h1>Get the Finest piece of art</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                 <Button to='/Gallery' primary='true' big='true'>Gallery</Button>
                </HeroContent>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
