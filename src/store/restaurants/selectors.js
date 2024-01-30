// export const selectRestaurants = (reduxState) => {
//   const clonedArray = [...reduxState.restaurants.all];
//   return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
// };
export const selectRestaurantsWithPizzas = (reduxState) => {
  const restaurants = reduxState.restaurants.all;
  const pizzas = reduxState.pizzas.allPizzas;

  // go through each restaurant
  const restWithPizzas = restaurants.map((rest) => {
    // for each pizza array inside a restaurant we replace it with
    // the pizza objects from the allPizzas array
    const replacePizzas = rest.pizzas.map((pId) =>
      pizzas.find((fullPizza) => pId === fullPizza.id)
    );

    // return the same restaurant obj but with a switched pizzas array
    return { ...rest, pizzas: replacePizzas };
  });
  console.log(pizzas);
  return restWithPizzas;
};
