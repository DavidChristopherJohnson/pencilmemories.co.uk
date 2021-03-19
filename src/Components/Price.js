import React from "react";
import styled from "styled-components";

const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 0.5rem;
  background: #fff;
  color: #000d1a;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-basis: 40%;
  justify-content: center;
  margin: 0 auto;
  overflow-x: hidden;
`;
const ProductCard = styled.div`
  margin: 2rem;
  width: 300px;
  /* border: 2px solid #000d1a; */
  border-radius: 20px; 
  padding: 1.5rem 0;
  box-shadow: 30px 10px 70px -30px rgba(0, 13, 26, .5);
`;
const ProductImg = styled.img`
  height: 200px;
  min-width: 300px;
  max-width: 100%;
`;
const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
`;
const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 2.5rem;
`;
const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Price = ({ data, Heading }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{Heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Price;
