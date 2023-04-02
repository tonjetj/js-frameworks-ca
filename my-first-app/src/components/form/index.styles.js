import styled from "styled-components";

export const ErrorMsg = styled.p`
  color: black;
  padding: 0px 5px;
  background-color: pink;
  width: 100%;
  border-radius: 5px;
`;

export const ContactForm = styled.form`
  border: 0.5px solid black;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
`;

export const Wrapper = styled.div`
  text-align: center;
  max-width: 450px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 0 auto;
    min-width: 200px;
  }
`;
