import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { cleanDetail, countryDetail } from "../../redux/actions";
import styles from "./detail.module.css";
import Loader from "../Loader";

const Detail = () => {
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  // console.log(detail[0].Activities[0].name);
  const muchachos = () => {
    if (detail[0].image === "https://flagcdn.com/w320/ar.png") {
      const muchachos =
        "https://statics.forbesargentina.com/2022/12/63a1aa1a03e69.jpg";
      return muchachos;
    }

    return detail[0].image;
  };

  const estrella = () => {
    if (detail[0].name === "Argentina") {
      const muchachos = "ARGENTINA ⭐⭐⭐";
      return muchachos;
    }
    return detail[0].name;
  };

  useEffect(() => {
    dispatch(countryDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const translateSeason = (season) => {
    switch (season) {
      case "Winter":
        return "Invierno";
      case "Autumn":
        return "Otoño";
      case "Summer":
        return "Verano";
      case "Spring":
        return "Primavera";
      default:
        return season; // Devuelve el valor original si no coincide con ninguna traducción
    }
  };

  const translateDifficulty = (difficulty) => {
    const difficultyString = String(difficulty);
    switch (difficultyString) {
      case "1":
        return "Muy fácil";
      case "2":
        return "Fácil";
      case "3":
        return "Medio";
      case "4":
        return "Dificil";
      case "5":
        return "Muy difícil";

      default:
        return difficulty;
    }
  };

  return (
    <div className={styles.detail}>
      {detail.length ? (
        <div className={styles.detailContainer}>
          <NavLink to="/home" className={styles.navlink}>
            <button className={styles.buttonToHome}> ← Home</button>
          </NavLink>

          <h1 className={styles.detailTitle}>{estrella()}</h1>
          <img src={muchachos()} alt={detail[0].name} className={styles.flag} />
          <h2 className={styles.detailInfo}>Continente: </h2>
          <p className={styles.detailInfo2}>
            {detail[0].continent} -{" "}
            {detail[0].subregion ? detail[0].subregion : "Subregion indefinida"}
          </p>
          <h2 className={styles.detailInfo}>Capital: </h2>
          <p className={styles.detailInfo2}>{detail[0].capital}</p>
          <h2 className={styles.detailInfo}>Area: </h2>
          <p className={styles.detailInfo2}>
            {detail[0].area.toLocaleString()} km²
          </p>
          <h2 className={styles.detailInfo}>Poblation: </h2>
          <p className={styles.detailInfo2}>
            {detail[0].poblation.toLocaleString()}
          </p>

          {detail[0].Activities[0] ? (
            <div className={styles.activityInfo}>
              <div className={styles.activityContainer}>
                <div className={styles.activityNameContainer}>
                  <h2 className={styles.activityName}>Actividad: </h2>
                  <p className={styles.activityText}>
                    {detail[0].Activities[0].name}
                  </p>
                </div>
                <br />
                <div className={styles.activitySeasonContainer}>
                  <h2 className={styles.activityName}>Temporada: </h2>
                  <p className={styles.activityText}>
                    {translateSeason(detail[0].Activities[0].season)}
                  </p>
                </div>
                <br />
                <div className={styles.activityDifficultyContainer}>
                  <h2 className={styles.activityName}>Dificultad: </h2>
                  <p className={styles.activityText}>
                    {translateDifficulty(detail[0].Activities[0].difficulty)}
                  </p>
                </div>
                <br />
                <div className={styles.activityDurationContainer}>
                  <h2 className={styles.activityName}>Duración: </h2>
                  <p className={styles.activityText}>
                    {detail[0].Activities[0].duration}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h2 className={styles.noActivity}>
              Este país no cuenta con una actividad
            </h2>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Detail;
