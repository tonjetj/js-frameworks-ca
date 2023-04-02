import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/ContactPage";

import * as S from "./index.styles";

function Nav() {
  return (
    <S.Nav>
      <ul>
        <S.Li>
          <Link to="/">Home</Link>
        </S.Li>
        <S.Li>
          <Link to="/contact">Contact</Link>
        </S.Li>
      </ul>
    </S.Nav>
  );
}

export default Nav;
