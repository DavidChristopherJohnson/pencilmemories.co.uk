import React from 'react'
import styled from  'styled-components'

export const ProductsContainer = styled.div`
width: 100vw;
min-height: 100vh;
padding: 2rem 1rem;
background: #000d1a;
color: #fff;
`
export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
overflow-x: hidden;
`
export const ProductCard = styled.div`
margin: 1rem 2.5rem;
line-height: 2;
width: 300px;
`
export const ProductImg = styled.img`
height: 100%;
max-width: 100%;
`
export const ProductsHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin: 2.5rem 0;
color: #CD853f;
`

const Gallery = ({Heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{Heading}</ProductsHeading>
            <ProductWrapper>
                {data.map ( (product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg  src={product.img} alt={product.alt} /> 
                        </ProductCard> 
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Gallery
