import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";

import * as S from "./index.styles";
import { Stack } from "@mui/material";

const url = "https://api.noroff.dev/api/v1/online-shop/";

function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    getData(url);
  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {
    return data.filter((data) =>
      search_parameters.some((parameter) =>
        data[parameter].toString().toLowerCase().includes(query)
      )
    );
  }

  return (
    <S.Wrapper className="container">
      <S.SearchContainer className="input-box">
        <S.SearchInput
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder=" Search..."
        />
      </S.SearchContainer>

      {search(data).map((product) => {
        let price = product.price.toFixed(0);
        let discountedPrice = product.discountedPrice.toFixed(0);
        let onSale = discountedPrice < price;
        let calculate = ((100 * discountedPrice) / price).toFixed(0);

        let percentage = calculate - 100;
        let ratingValue = product.rating;

        return (
          <div>
            {onSale ? (
              <div>
                <S.Card>
                  <S.ImageContainer
                    class="cardImage"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  >
                    <S.SaleBanner>{percentage}%</S.SaleBanner>
                  </S.ImageContainer>

                  <S.CardBody>
                    <S.PriceWrapper>
                      <S.Price>{discountedPrice} Kr</S.Price>
                      <S.OnSale>{price} NOK</S.OnSale>
                    </S.PriceWrapper>
                    <S.CopyWrapper>
                      <S.Title>{product.title}</S.Title>
                      <Stack spacing={1}>
                        <Rating
                          value={ratingValue}
                          precision={0.5}
                          readOnly
                          style={{ color: "black" }}
                        />
                      </Stack>
                    </S.CopyWrapper>

                    <Link to={`/product/${product.id}`}>
                      <S.Button>View product</S.Button>
                    </Link>
                  </S.CardBody>
                </S.Card>
              </div>
            ) : (
              <div>
                <S.Card>
                  <S.ImageContainer
                    class="cardImage"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  ></S.ImageContainer>

                  <S.CardBody>
                    <S.PriceWrapper>
                      <S.Price>{price} NOK</S.Price>
                    </S.PriceWrapper>
                    <S.CopyWrapper>
                      <S.Title>{product.title}</S.Title>

                      <Stack spacing={1}>
                        <Rating
                          value={ratingValue}
                          precision={0.5}
                          readOnly
                          style={{ color: "black" }}
                        />
                      </Stack>
                    </S.CopyWrapper>

                    <Link to={`/product/${product.id}`}>
                      <S.Button>View product</S.Button>
                    </Link>
                  </S.CardBody>
                </S.Card>
              </div>
            )}
          </div>
        );
      })}
    </S.Wrapper>
  );
}

export default Search;
