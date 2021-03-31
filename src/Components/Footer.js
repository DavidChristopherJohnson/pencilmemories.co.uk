import React from "react";
import emailjs from "emailjs-com";
import styled, { css } from "styled-components/macro";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookSquare } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContent = css`
  flex-basis: 40%;
  padding: 10px 20px;
`;
const H2Heading = css`
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
`;
const Text = css`
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #656565;
`;
const Input = css`
  width: 100%;
  color: #d9d9d9;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
`;

const FooterContainer = styled.footer`
  bottom: 0px;
  width: 100%;
  background: #111;
  color: #d9d9d9;

  p {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 1rem;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  margin: 20px 0 10px 0;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: -10px;
    height: 2px;
    width: 100%;
    background: #1a1a1a;
  }
  &::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 20%;
    background: #cd853f;
    top: -10px;
    margin-bottom: 10px;
  }
`;
const Boxleft = styled.div`
  ${MainContent}

  h2 {
    ${H2Heading}
  }
  p {
    text-align: left;
  }
`;
const Boxcenter = styled.div`
  ${MainContent}

  h2 {
    ${H2Heading}
  }
`;
const Boxright = styled.div`
  ${MainContent}

  h2 {
    ${H2Heading}
  }
`;

const QuickLinksWrap = styled.div`
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 36px;

  &:hover {
    color: #cd853f;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
const NavMenuLinks = styled(ScrollLink)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: #cd853f;
    transition: ease-in 0.25s;
  }
  @media screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;
const Form = styled.form`
  color: #d9d9d9;
`;
const Name = styled.div`
  ${Text}

  input {
    ${Input}
  }
`;
const Email = styled.div`
  ${Text}
  margin-top: 10px;

  input {
    ${Input}
  }
`;
const Message = styled.div`
  ${Text}
  margin-top: 10px;

  textarea {
    ${Input}
  }
`;
const Btn = styled.div`
  margin-top: 10px;

  button {
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    background: #cd853f;
    font-size: 1.0625rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &::hover {
      background: #000;
      color: #cd853f;
    }
  }
`;

function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_9g63jap",
        e.target,
        "user_KGysl3qmSKFIzCF3yRdm3"
      )
      .then(
        (result) => {
          toast.success("Message Sent!", {
            className: "Toast-success",
            draggable: false,
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
          });
          console.log(result.text);
        },
        (error) => {
          toast.error("Something went wrong! please try again", {
            className: "Toast-Error",
            draggable: false,
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const today = new Date();
  return (
    <FooterContainer>
      <FooterWrapper>
        <Boxleft>
          <h2>About us</h2>
          <Content>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <SocialIcons>
              <SocialIconLink
                href="https://facebook.com/DianeRachelJohnson"
                target="https://facebook.com/DianeRachelJohnson/"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </SocialIconLink>
            </SocialIcons>
          </Content>
        </Boxleft>
        <Boxcenter>
          <QuickLinksWrap>
            <h2>Pencil Memories</h2>
            <Content>
              <NavMenu>
                <NavMenuLinks to="home">Home</NavMenuLinks>
                <NavMenuLinks to="about">About</NavMenuLinks>
                <NavMenuLinks to="gallery">Gallery</NavMenuLinks>
                <NavMenuLinks to="Order Now">Offer</NavMenuLinks>
              </NavMenu>
            </Content>
          </QuickLinksWrap>
        </Boxcenter>
        <Boxright>
          <h2>Contact us</h2>
          <Content>
            <Form id="contact" onSubmit={sendEmail}>
              <Name>
                <input type="text" placeholder="Name" name="name" />
              </Name>
              <Email>
                <input type="email" placeholder="Email Address" name="email" />
              </Email>
              <Message>
                <textarea placeholder="Your message" name="message"></textarea>
              </Message>
              <Btn>
                <button type="submit" value="Send Message">
                  Send
                </button>
              </Btn>
            </Form>
          </Content>
        </Boxright>
      </FooterWrapper>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </FooterContainer>
  );
}

export default Footer;
