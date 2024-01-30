import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    {
      name: "Sotto Pizza",
      id: 56642,
      pizzas: [67283, 357311],
    },
    {
      name: "I Pazzi",
      id: 56643,
      pizzas: [161235],
    },
    {
      name: "Pizza Napoli",
      id: 56644,
      pizzas: [161235, 357311],
    },
    {
      name: "Eatmosfera",
      id: 56645,
      pizzas: [67283, 161235],
    },
  ],
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
});

export const {} = restaurantSlice.actions;

export default restaurantSlice.reducer;
