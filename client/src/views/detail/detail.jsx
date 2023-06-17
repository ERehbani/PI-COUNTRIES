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

  return (
    <div className={styles.detail}>
      {detail.length ? (
        <div className={styles.detailContainer}>
          <NavLink to="/home">Home</NavLink>
          <h1>DETAIL</h1>

          <h1>{estrella()}</h1>
          <img src={muchachos()} alt={detail[0].name} className={styles.flag} />
          <h2>
            Continente: {detail[0].continent} -{" "}
            {detail[0].subregion ? detail[0].subregion : "Subregion indefinida"}
          </h2>
          <h2>Capital: {detail[0].capital}</h2>
          <h2>Area: {detail[0].area.toLocaleString()} km²</h2>
          <h2>Poblation: {detail[0].poblation.toLocaleString()}</h2>

          {detail[0].Activities[0] ? (
            <h2>
              Activity: {detail[0].Activities[0].name}, Season:{" "}
              {detail[0].Activities[0].season}, Difficulty:{" "}
              {detail[0].Activities[0].difficulty}, Duration:{" "}
              {detail[0].Activities[0].duration}
            </h2>
          ) : (
            <h2>Este país no cuenta con una actividad</h2>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Detail;
