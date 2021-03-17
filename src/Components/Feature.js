import React from "react";
import styled, { css } from "styled-components/macro";
import FeaturePic from "../assets/img/FeaturePic.jpg";
import emailjs from "emailjs-com";

const FeatureContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${FeaturePic});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  padding-right: 10px;
  h1 {
    margin-bottom: 10px;
    font-size: clamp(3rem, 5vw, 4rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`;
const Text = css`
  font-size: 1.0625rem;
  margin-bottom: 10px;
  color: #656565;
`;
const Input = css`
  width: 300px;
  color: #d9d9d9;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
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

const FormContainer = styled.div`
  border-radius: 20px;
  background-color: #000d1a;
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Feature = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <FeatureContainer id="feature">
      <TextContainer>
        <h1>Get your potrait</h1>
        <p>It is easy, just contact me and I will get back to you </p>
      </TextContainer>
      <FormContainer>
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
      </FormContainer>
    </FeatureContainer>
  );
};

export default Feature;
