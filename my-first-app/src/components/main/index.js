import Home from "../../pages/Home";
import Contact from "../../pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import Product from "../../pages/ProductPage";
import * as S from "./index.styles";
function Main() {
  return (
    <S.Main>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </S.Main>
  );
}

export default Main;
