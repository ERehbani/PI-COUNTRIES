// import Card from "../../components/card/card"

import CardList from "../../components/cardList/cardList";
import { useEffect, useState } from "react";
import { getCountry, getCountryByName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../Searchbar/searchbar";
import Paginado from "../Paginado/paginado";
import Filter from "../Filters/filters";
import Order from "../Order/order";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchString));
  };

  useEffect(() => {
    if (!allCountries.length) {
      dispatch(getCountry());
    }
  }, [dispatch, allCountries]);

  return (
    <div>
      <h1 className="homeTitle">HOME</h1>
      <div className="homeContainer">
        <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />

        <Filter />
        <Order />
      </div>
      <CardList allCountries={allCountries} />
      <Paginado />

      <div className="footerContainer">
        <footer>
          Creado por{" "}
          <span>
            <img src="github.svg" className="githubLogo" alt="" />
          </span>
          <b> Elián Rehbani </b>para <b>Henry </b>
          <span>
            <img src="henry.png" alt="" className="henryLogo" />
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
