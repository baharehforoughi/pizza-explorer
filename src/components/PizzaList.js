import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorites } from "../store/user/slice";
import "./styles.scss";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <li
              key={pizza.id}
              className="pizza"
              style={{ backgroundImage: `url(${pizza.image})` }}
            >
              <h4>{pizza.name}</h4>
              <button
                onClick={() => {
                  dispatch(toggleFavorites(pizza.id));
                }}
                className={`fav-toggle ${
                  user.favorites.includes(pizza.id) ? "fav" : ""
                }`}
              >
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              <div className="overlay">
                <p>{pizza.description}</p>
                <span>
                  Bought: <strong>{pizza.bought}</strong> times!
                </span>
              </div>
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
}
