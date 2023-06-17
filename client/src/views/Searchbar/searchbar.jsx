import styles from "./searchbar.module.css";

const Searchbar = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          onChange={handleChange}
          placeholder="Nombre"
          type="text"
        />

        <span className={styles.icon}>
          <button onClick={handleSubmit}>Buscar</button>
        </span>
        <div className={styles.topline}></div>
        <div className={styles.underline}></div>
      </div>
    </div>
  );
};

export default Searchbar;
