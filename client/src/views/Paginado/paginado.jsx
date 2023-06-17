import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryOnPage, nextPage, prevPage } from "../../redux/actions";
import styles from "./paginado.module.css";

const Paginado = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  const currentPage = useSelector((state) => state.page);

  let countriesPerPage = 10;
  const totCountries = countriesState.length;
  //   const firstIndex = (currentPage - 1) * countriesPerPage;

  //   let currPageCountry = [...countriesState].splice(
  //     firstIndex,
  //     countriesPerPage
  //   );

  useEffect(() => {
    const firstIndex = (currentPage - 1) * countriesPerPage;
    const currPageCountry = countriesState.slice(
      firstIndex,
      firstIndex + countriesPerPage
    );
    dispatch(countryOnPage(currPageCountry));
  }, [dispatch, countriesState, currentPage]);

  const prevHandler = (currPage) => {
    if (currPage === 1) return;
    return dispatch(prevPage(currPage));
  };
  const nextHandler = (currPage) => {
    if (currPage * countriesPerPage >= totCountries) return;
    return dispatch(nextPage(currPage));
  };

  return (
    <div className={styles.paginado}>
      <div className={styles.paginadoContainer}>
        <button
          onClick={() => prevHandler(currentPage)}
          className={styles.button}
        >
          PREV
        </button>
        <p className={styles.pagina}>
          {currentPage}/{Math.floor(totCountries / countriesPerPage)}
        </p>
        <button
          onClick={() => nextHandler(currentPage)}
          className={styles.button}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Paginado;
