import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/restaurants/selectors";

export function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);

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
    </div>
  );
}
