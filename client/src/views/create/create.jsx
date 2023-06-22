import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity, postActivity } from "../../redux/actions";
import validate from "./validate";
import "./create.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [countrySelected, setCountrySelected] = useState(false);
  const [seasonSelected, setSeasonSelected] = useState(false);
  const [difficulty, setDifficulty] = useState(false);
  const [maxSelectedCountries, setMaxSelectedCountries] = useState(5);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });
  console.log(input);

  useEffect(() => {
    dispatch(getActivity());
  });

  const [error, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    const seasonValue = event.target.value;
    if (seasonValue !== "") {
      setSeasonSelected(true);
    } else {
      setSeasonSelected(false);
    }

    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDifficulty = (event) => {
    event.preventDefault();
    const difficultyValue = event.target.value;
    if (difficultyValue !== "") {
      setDifficulty(true);
    } else {
      setDifficulty(false);
    }

    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    const selectedCountryId = event.target.value;
    const findRepeat = input.countryId.includes(selectedCountryId);

    if (selectedCountryId !== "") {
      setCountrySelected(true);
    } else {
      setCountrySelected(false);
    }
    if (findRepeat) {
      return alert("Este país ya ha sido seleccionado");
    }

    if (input.countryId.length >= maxSelectedCountries) {
      return alert(
        `Se alcanzó el límite máximo de ${maxSelectedCountries} países seleccionados.`
      );
    }

    const updatedInput = {
      ...input,
      countryId: [...input.countryId, selectedCountryId],
    };

    setInput(updatedInput);
    setError(validate(updatedInput));
  };

  const handleDelete = (countrySelected) => {
    setInput({
      ...input,
      countryId: input.countryId.filter(
        (country) => country !== countrySelected
      ),
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.season ||
      input.countryId.length === 0
    ) {
      return alert("Debes completar todos los campos para crear una actividad");
    }

    if (
      error.name ||
      error.difficulty ||
      error.duration ||
      error.season ||
      error.countryId
    ) {
      return alert("Verificar que se cumplan todas las validaciones");
    }

    if (input.countryId.length > maxSelectedCountries) {
      return alert(
        `Se superó el límite máximo de ${maxSelectedCountries} países seleccionados.`
      );
    }

    dispatch(postActivity(input));
    alert("Actividad completada correctamente!");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
    });
  };
  console.log(input.countryId);
  return (
    <div>
      <NavLink to="/home" className="navlink">
        <button className="buttonToHome"> ← Home</button>
      </NavLink>
      <form className="form-container" onSubmit={handleOnSubmit}>
        <h1 className="create-title">Crear una actividad</h1>

        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="name">
                <h1 className="form-title">Nombre: </h1>
              </label>
              <input
                onChange={handleChange}
                value={input.name}
                type="text"
                placeholder="Ingresa el nombre"
                name="name"
                autoComplete="off"
                className="input-name"
              />

              {error.name ? (
                <div className="error-container">
                  {" "}
                  <p className="error-text">{error.name}</p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="difficulty">
                <h1 className="form-title">Dificultad: </h1>
              </label>
              {/* <input
                onChange={handleChange}
                value={input.difficulty}
                type="text"
                placeholder="Ingresa la dificultad (1 a 5)"
                name="difficulty"
                autoComplete="off"
              /> */}
              <select
                name="difficulty"
                id=""
                onChange={handleDifficulty}
                className="input-difficulty"
              >
                <option disabled={difficulty} value="">
                  Seleccione una dificultad
                </option>
                <option name="difficulty" value="1">
                  Muy fácil (⚫〇〇〇〇)
                </option>
                <option name="difficulty" value="2">
                  Fácil (⚫⚫〇〇〇)
                </option>
                <option name="difficulty" value="3">
                  Medio (⚫⚫⚫〇〇)
                </option>
                <option name="difficulty" value="4">
                  Difícil (⚫⚫⚫⚫〇)
                </option>
                <option name="difficulty" value="5">
                  Muy difícil (⚫⚫⚫⚫⚫)
                </option>
              </select>

              {error.difficulty ? (
                <div className="error-container">
                  <p className="error-text">{error.difficulty}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="form-column">
            <div className="form-group">
              <label htmlFor="duration">
                <h1 className="form-title">Duración: </h1>
              </label>
              <input
                onChange={handleChange}
                value={input.duration}
                type="text"
                placeholder="Ingresa la duración HH:MM:SS"
                name="duration"
                autoComplete="off"
                className="input-duration"
              />

              {error.duration ? (
                <div className="error-container">
                  <p className="error-text">{error.duration}</p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="season">
                <h1 className="form-title">Temporada: </h1>
              </label>
              <select
                name="season"
                onChange={handleChange}
                className="input-season"
              >
                <option disabled={seasonSelected}>
                  Selecciona la temporada
                </option>
                <option value="Summer">Verano ☀️</option>
                <option value="Autumn">Otoño 🍂</option>
                <option value="Winter">Invierno ⛄</option>
                <option value="Spring">Primavera 🌷</option>
              </select>

              {error.season ? (
                <div className="error-container">
                  <p className="error-text">{error.season}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="countryId">
            <h1 className="form-title">País: </h1>
          </label>
          <select
            name="countryId"
            onChange={handleSelectChange}
            className="input-country"
          >
            <option disabled={countrySelected}>Selecciona el/los países</option>
            {countries &&
              countries.map((country) => (
                <option value={country.id} key={country.id}>
                  {country.name}
                </option>
              ))}

            {error.countryId ? (
              <div className="error-container">
                <p className="error-text">{error.countryId}</p>
              </div>
            ) : (
              ""
            )}
          </select>
        </div>

        <div className="selected-countries-container">
          <h1 className="form-title">Lista de países seleccionados: </h1>
          <div className="country-container">
            {input.countryId.map((countrySelected) => (
              <div key={countrySelected}>
                <img
                  src="xbutton.svg"
                  alt=""
                  onClick={() => handleDelete(countrySelected)}
                  className="x-button"
                />
                <span className="countrySelected">{countrySelected}</span>
                {/* <input
                  type="button"
                  value="x"
                  onClick={() => handleDelete(countrySelected)}
                  className="x-button"
                /> */}
              </div>
            ))}
          </div>
        </div>

        <div className="button-container">
          <button className="button-form" type="submit">
            Enviar <img className="img-button" src="vector.svg" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
