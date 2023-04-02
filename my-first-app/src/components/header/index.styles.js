import styled from "styled-components";

export const HWrapper = styled.div`
  width: 100%;
  justify-content: center;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 52%;
  color: #15202b;
  padding: 10px;
`;

export const Logo = styled.img`
  max-width: 120px;
`;
