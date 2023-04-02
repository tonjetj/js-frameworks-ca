import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Wrapper } from "../../components/searchBar/index.styles";

function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  console.log(data);

  return (
    <Wrapper>
      <div>
        <p className="breadCrumbs">
          <Link to={"/"}>Home</Link> / {data.title}
        </p>
      </div>

      <div>
        <img src={data.imageUrl} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>Rating: {data.rating} / 5</p>
        <p>{data.price} NOK</p>

        <Reviews />
      </div>
    </Wrapper>
  );
}

export default Product;

function Reviews() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, []);

  if (isLoading || !data) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  console.log(data);

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {data.reviews.map((review) => (
        <div className="review">
          <h3>{review.username}</h3>
          <p>{review.rating}</p>
          <p>{review.description}</p>
        </div>
      ))}
    </div>
  );
}
