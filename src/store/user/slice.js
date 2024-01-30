import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;
      // Check first if it's already a favorite or not
      const newFavs = state.favorites.includes(idToAdd)
        ? state.favorites.filter((nr) => nr !== idToAdd) // if it is => remove it
        : [...state.favorites, idToAdd]; // if not, add it.

      state.favorites = newFavs;
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
