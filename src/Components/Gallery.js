import React, { useEffect } from 'react'
import styled from  'styled-components'
import { motion, useViewportScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const ProductsContainer = styled(motion.div)`
width: 100vw;
min-height: 100vh;
padding: 2rem 1rem;
background: #000d1a;
color: #fff;
`
const ProductWrapper = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`
const ProductCard = styled(motion.div)`
margin: 1rem 2.5rem;
line-height: 2;
width: 300px;

@media screen and (max-width: 820px) {
    margin: 2.5rem 1rem;
    width: 260px;
  }
`
const ProductImg = styled(motion.img)`
height: 100%;
width: 100%;

@media screen and (max-width: 820px) {
    object-fit: cover;
  }

`
const ProductsHeading = styled(motion.h1)`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin: 2.5rem 0;
color: #CD853f;
`


const Gallery = ({Heading, data}) => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if(inView){
          controls.start ("visible");
      }
  }, [controls, inView]);

    return (
        <ProductsContainer id='gallery'>
            <ProductsHeading>{Heading}</ProductsHeading>
            <ProductWrapper>
                {data.map ( (product, index) => {
                    return(
                        <ProductCard 
                        ref={ref}
                        variants={{
                            visible:{opacity: 1,
                                transition:{
                                    delayChildren: .3, 
                                    duration: .5 }
                            
                            },
                            hidden: {opacity: 0}

                        }}
                        animate={controls}
                        initial="hidden"
                        style={{scale: scale}}
                        key={index}>
                            <ProductImg  src={product.img} alt={product.alt} delay={product.delay} /> 
                        </ProductCard> 
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Gallery
