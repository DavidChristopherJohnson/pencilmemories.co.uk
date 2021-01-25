import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import logo from '../assets/icons/favicon32.png'

const FooterContainer = styled.footer`
  background-color: #0d0909;
  color: #fff;
  width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;

  p{
    color: #ccc;
    padding-bottom: 1rem;
  }
`;

const FooterWrapper = styled.div`
  position: relative;
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
  padding: 1.3rem 0;
  align-items: center; 
  width: 240px;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover{
    color: #CD853f;
  }
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
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover{
    color: #CD853f;
    transition: ease-in .25s;
}
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
                              Pencil Drawing
                            </Sociallogo>
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
      <p>Copyright {today.getFullYear()}</p>
    </FooterContainer>

        
	);
}

export default Footer;