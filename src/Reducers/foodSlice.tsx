import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { foods } from "../data";

//define the async thunk to fetch products
export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  return foods;
});

//define the product slice
const foodSlice = createSlice({
  name: "foodItems",
  initialState: {
    items: [],
    filteredItems:[],
    status: null,
  },
  reducers: {
    filterByPrice:(state, action) => {
      const {minPrice, maxPrice} = action.payload;
      state.filteredItems = state.items.filter(
        (food) => food.price >= minPrice && food.price <= maxPrice
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.status = "successs";
        state.items = action.payload;
      })
      .addCase(fetchFoods.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {filterByPrice} = foodSlice.actions;
export default foodSlice.reducer;