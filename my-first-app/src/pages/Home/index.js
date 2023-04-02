import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/searchBar";

export const url = "https://api.noroff.dev/api/v1/online-shop/";

function Home() {
  return <Search />;
}

export default Home;
