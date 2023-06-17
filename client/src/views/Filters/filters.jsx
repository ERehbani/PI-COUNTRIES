import { useDispatch, useSelector } from "react-redux";
import {
  filterActivity,
  // filterCountry,
  setPage,
  updateFilteredCountries,
} from "../../redux/actions";
// import { useState } from "react";

export const Filter = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const countryContinent = useSelector((state) => state.allCountries);
  // const [filter, setFilter] = useState("");
  // const [activitySelected, setActivitySelected] = useState(false);
  console.log(countryContinent);
  let allCountries = [];
  countryContinent.forEach((country) => {
    allCountries.push(country.continent);
  });
  const filtro = allCountries.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });

  const handleFilter = (event) => {
    const filteredCountries = countryContinent.filter(
      (country) => country.continent === event.target.value
    );
    dispatch(updateFilteredCountries(filteredCountries));
    dispatch(setPage(1));
  };

  const handleActivity = (event) => {
    const selectedActivity = event.target.value;

    if (selectedActivity === "All") {
      dispatch(filterActivity(selectedActivity)); // Pasar el nombre de la actividad
    } else {
      dispatch(filterActivity(selectedActivity)); // Pasar el nombre de la actividad
    }

    dispatch(setPage(1));
  };

  return (
    <div>
      <b>Filtro </b>
      <select name="continent" id="" defaultValue="" onChange={handleFilter}>
        <option value="continent">Continentes</option>
        {filtro.map((cont, index) => (
          <option value={cont} key={index}>
            {cont}
          </option>
        ))}
      </select>

      <select onChange={handleActivity}>
        <option value="All">Todos los países</option>
        <option>Filtrar por actividad</option>
        {activities?.map((activity, index) => (
          <option value={activity.name} key={index}>
            {activity.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
