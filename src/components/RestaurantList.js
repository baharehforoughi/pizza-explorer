import { useSelector } from "react-redux";
import {
  selectRestaurantsThatSellPizza,
  selectRestaurantsWithPizzas,
} from "../store/restaurants/selectors";
import { useState } from "react";
import { selectPizzas } from "../store/pizzas/selectors";

export function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(selectPizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);
  const sellsPizza = useSelector(selectRestaurantsThatSellPizza(selectedPizza));

  return (
    <div>
      <h1>Restaurants</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <strong>{restaurant.name}</strong>
              <ul>
                {restaurant.pizzas.map((p) => (
                  <li>{p.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <h2>
        Who sells{" "}
        <select
          value={selectedPizza}
          onChange={(e) => {
            setSelectedPizza(parseInt(e.target.value));
          }}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        ?
      </h2>
      <ul>
        {sellsPizza.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
