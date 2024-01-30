import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-articleLarge-v3.jpg",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://img.static-rmg.be/a/food/image/q100/w480/h360/1087722/pizza-bianca-met-artisjok-en-mortadella.jpg",
    },
  ],
};

export const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const { name, description } = action.payload;
      const newPizza = {
        id: Math.floor(Math.random() * 1000),
        name,
        description,
        bought: 0,
      };
      state.allPizzas.push(newPizza);
    },
  },
});

export const { addPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
