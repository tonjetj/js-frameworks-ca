import Cart from "../cart";
import Nav from "../nav";
import logo from "../../images/logo.png";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.HWrapper>
      <S.Header>
        <Link to="/">
          <S.Logo src={logo} alt="Logo" />
        </Link>
        <Nav />

        <Cart />
      </S.Header>
    </S.HWrapper>
  );
}

export default Header;
