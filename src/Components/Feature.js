import React from 'react'
import styled from 'styled-components'
import FeaturePic from '../assets/img/FeaturePic.jpg'
import { Button } from './Button'


const FeatureContainer = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
url(${FeaturePic});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

h1{
    font-size: clamp(3rem, 5vw, 5rem);
}
p{
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
}
`

const Feature = () => {
    return (
        <FeatureContainer id='feature'>
            <h1>Get your potrait</h1>
            <p>It is easy, just contact me and I will get back to you </p>
            <Button big="true">Order now</Button>
        </FeatureContainer>
    )
}

export default Feature
