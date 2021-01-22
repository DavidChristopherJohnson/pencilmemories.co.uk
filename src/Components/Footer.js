import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import logo from '../assets/icons/favicon32.png'

const FooterContainer = styled.footer`
  background-color: #0d0909;
  align-items: center;
  color: #fff;
`;

const FooterWrapper = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const Sociallogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
const NavMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem 0;
`
const NavMenuLinks = styled(Link)`
color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`



function Footer() {

	const today = new Date();
	return (
		<FooterContainer>
			<FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
						<Sociallogo to='/'>
						<img src={logo} alt='logo' />
						Pencil Drawing</Sociallogo>
						<NavMenu>
               				{menuData.map ((item, index) => (
                   			<NavMenuLinks to={item.link} key={index}>
                       			{item.title}
                   			 </NavMenuLinks>
               				))}
           				</NavMenu>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Pinterest" rel="noopener noreferrer">
                                <FaPinterest />
                            </SocialIconLink>
						</SocialIcons>
                    </SocialMediaWrap>
				</SocialMedia> 
			</FooterWrapper>
			<p> {today.getFullYear()} </p>
        </FooterContainer>
	);
}

export default Footer;