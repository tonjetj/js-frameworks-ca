import styled from "styled-components";

export const Button = styled.button`
  border: 0.5px solid black;
  background-color: #fff;
  width: 100%;
  color: #000;
  &:hover {
    cursor: pointer;
  }
  padding: 8px 20px;
  border-radius: 10px;
`;

export const Card = styled.div`
  max-width: 280px;
  min-height: 400px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 20px auto;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 15px -5px;
  }
  @media (max-width: 450px) {
    max-width: 350px;
  }
`;

export const ImageContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 200px;
  position: relative;
`;

export const CardBody = styled.div`
  background-color: #fff;
  display: flex-block;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const SearchInput = styled.input`
  min-width: 100%;
  padding: 0px 5px;
  &:hover {
    min-width: 100%;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  margin: 0 auto;
  padding: 15px 0;
  border-radius: 15px;
  border: 1px solid black;
`;

export const SearchContainer = styled.div`
  margin: 0 20px;
  grid-column: 3/4;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const OnSale = styled.p`
  text-decoration: line-through;
  opacity: 50%;
`;

export const Price = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 0 auto;
`;

export const CopyWrapper = styled.div`
  display: flex-blcok;
  justify-content: left;
  margin: -20px auto 20px;
`;

export const SaleBanner = styled.div`
  background-color: #c5001d;
  color: white;
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  right: 13px;
  top: 13px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h3`
  font-size: 22px;
  margin: 10px 0 4px 0;
`;
