import { useState, useEffect } from "react";
import * as S from "./index.styles";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Cart() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has run");
  }, []);

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }
  if (counter < 0) {
    setCounter(0);
  }

  console.log("Component has rendered");

  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
      <S.Cart>
        <ShoppingCartRoundedIcon
          style={{ color: "black", scale: "1.5" }}
          fontSize="medium"
        />
        <S.Counter>{counter}</S.Counter>
      </S.Cart>
    </div>
  );
}

export default Cart;
