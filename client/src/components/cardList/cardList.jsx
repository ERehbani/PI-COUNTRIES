import { useSelector } from "react-redux";
import React from "react";
import Card from "../card/card";
import styles from "./cardList.module.css";

const CardList = () => {
  const country = useSelector((state) => state.countriesCurrentPage);

  return (
    <div className={styles.cardList}>
      {country.map((country) => {
        return (
          <Card
            key={country.id ? country.id : "error"}
            id={country.id ? country.id : "error"}
            name={country.name ? country.name : "error"}
            image={country.image ? country.image : "error"}
            continent={country.continent ? country.continent : "error"}
            capital={
              country.capital ? country.capital : "this country has no capital"
            }
            subregion={country.subregion ? country.subregion : "error"}
            area={country.area ? country.area : "error"}
            poblation={country.poblation ? country.poblation : "error"}
            activities={country.Activities ? country.Activities : "error"}
          />
        );
      })}
    </div>
  );
};

export default CardList;
