import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity, postActivity } from "../../redux/actions";
import validate from "./validate";
import './create.css'

const Create = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [countrySelected, setCountrySelected] = useState(false);
  const [seasonSelected, setSeasonSelected] = useState(false);
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

    setInput((input) => ({
      ...input,
      countryId: [...input.countryId, selectedCountryId],
    }));
    setError(
      validate({
        ...input,
        countryId: selectedCountryId,
      })
    );
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

  return (
    <div>
      <form className="form-container" onSubmit={handleOnSubmit}>
        <h1>Crear una actividad turística</h1>

        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                onChange={handleChange}
                value={input.name}
                type="text"
                placeholder="Ingresa el nombre"
                name="name"
                autoComplete="off"
              />
              {error.name ? <p>{error.name}</p> : ""}
            </div>

            <div className="form-group">
              <label htmlFor="difficulty">Dificultad:</label>
              <input
                onChange={handleChange}
                value={input.difficulty}
                type="text"
                placeholder="Ingresa la dificultad (1 a 5)"
                name="difficulty"
                autoComplete="off"
              />
              {error.difficulty ? <p>{error.difficulty}</p> : ""}
            </div>
          </div>

          <div className="form-column">
            <div className="form-group">
              <label htmlFor="duration">Duración:</label>
              <input
                onChange={handleChange}
                value={input.duration}
                type="text"
                placeholder="Ingresa la duración HH:MM:SS"
                name="duration"
                autoComplete="off"
              />
              {error.duration ? <p>{error.duration}</p> : ""}
            </div>

            <div className="form-group">
              <label htmlFor="season">Temporada:</label>
              <select name="season" onChange={handleChange}>
                <option disabled={seasonSelected}>
                  Selecciona la temporada
                </option>
                <option value="Summer">Verano</option>
                <option value="Autumn">Otoño</option>
                <option value="Winter">Invierno</option>
                <option value="Spring">Primavera</option>
              </select>
              {error.season ? <p>{error.season}</p> : ""}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="countryId">País:</label>
          <select name="countryId" onChange={handleSelectChange}>
            <option disabled={countrySelected}>Selecciona el/los países</option>
            {countries &&
              countries.map((country) => (
                <option value={country.id} key={country.id}>
                  {country.name}
                </option>
              ))}
            {error.countryId ? <p>{error.countryId}</p> : ""}
          </select>
        </div>

        <div className="selected-countries-container">
          <h3>Lista de países seleccionados:</h3>
          {input.countryId.map((countrySelected) => (
            <div key={countrySelected} className="country-container">
              <span>{countrySelected}</span>
              <input
                type="button"
                value="x"
                onClick={() => handleDelete(countrySelected)}
              />
            </div>
          ))}
        </div>

        <button className="button" type="submit">
          Enviar
        </button>
      </form>
      
    </div>
  );
};

export default Create;
