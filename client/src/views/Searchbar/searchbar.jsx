import "../index.css";

const Searchbar = ({ handleSubmit, handleChange }) => {
  return (
    <div className="filerOrderContainer">
      <div className="inputContainer">
        <h1 className="titleBar">Búsqueda</h1>
        <input
          className="inputSearch"
          onChange={handleChange}
          placeholder="Nombre"
          type="text"
        />

        <div className="topline"></div>
        <div className="underline"></div>
      </div>
        <span className="icon">
          <button className="buttonSubmit" onClick={handleSubmit}>Buscar🔍</button>
        </span>
    </div>
  );
};

export default Searchbar;
