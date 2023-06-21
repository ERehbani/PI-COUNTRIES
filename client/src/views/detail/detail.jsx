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

          <h1 className={styles.detailTitle}>{estrella()}</h1>
          <img src={muchachos()} alt={detail[0].name} className={styles.flag} />
          <h2 className={styles.detailInfo}>Continente: </h2>
          <p className={styles.detailInfo2}>{detail[0].continent} -{" "}
            {detail[0].subregion ? detail[0].subregion : "Subregion indefinida"}
            </p>
          <h2 className={styles.detailInfo}>Capital: </h2>
          <p className={styles.detailInfo2}>{detail[0].capital}</p>
          <h2 className={styles.detailInfo}>Area: </h2>
          <p className={styles.detailInfo2}>{detail[0].area.toLocaleString()} km²</p>
          <h2 className={styles.detailInfo}>Poblation: </h2>
          <p className={styles.detailInfo2}>{detail[0].poblation.toLocaleString()}</p>

          {detail[0].Activities[0] ? (
            <p className={styles.detailInfo}>
              Activity: {detail[0].Activities[0].name}, Season:{" "}
              {detail[0].Activities[0].season}, Difficulty:{" "}
              {detail[0].Activities[0].difficulty}, Duration:{" "}
              {detail[0].Activities[0].duration}
            </p>
          ) : (
            <h2 className={styles.noActivity}>Este país no cuenta con una actividad</h2>
          )}
        </div>
      ) : (
        <Loader />
      )}

      
    </div>
  );
};

export default Detail;
