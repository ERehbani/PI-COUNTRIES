import "./Loader.css";

const Loader = () => {
  return (
    <div class="loaderContainer">
      <svg class="svg">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 48 -7"
          ></feColorMatrix>
        </filter>
      </svg>

      <div class="loader"></div>
    </div>
  );
};

export default Loader;
