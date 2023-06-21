import { orderCountryAZ, orderCountryPoblation } from "../../redux/actions";
import { useDispatch } from "react-redux";
import '../index.css'

const Order = () => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCountryAZ(event.target.value));
  };

  const handleOrderPob = (event) => {
    dispatch(orderCountryPoblation(event.target.value));
  };

  return (
    <div className="filterOrderContainer">
      <div className="orderAlfabetico">
        <h1 className="titleBar">Orden Alfabético</h1>
        <select className="orderSelect" onChange={handleOrder}>
          <option disabled value="">
            Alfabetico
          </option>
          <option value="A - Z">A - Z</option>
          <option value="Z - A">Z - A</option>
        </select>
      </div>
      <div className="orderPoblation">
        <h1 className="titleBar">Población</h1>
        <select className="orderSelect" onChange={handleOrderPob}>
          <option disabled value="">
            Población
          </option>
          <option value="Mayor">Mayor Poblacion</option>
          <option value="Menor">Menor poblacion</option>
        </select>
        </div>
    </div>
  );
};

export default Order;
