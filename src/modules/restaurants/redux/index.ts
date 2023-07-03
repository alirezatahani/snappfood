import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export interface RestaurantState {
  restaurants: any[];
  loading: boolean;
  error: string;
  pageTitle: any;
  page: number;
  coords: GeolocationCoordinates;
}

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: '',
  pageTitle: '',
  coords: null,
  page: 0,
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',

  initialState,
  reducers: {
    fetchMore: (state) => {
      state.loading = true;
      state.page = state.page + 1;
    },
    fetchRestaurants: (state, { payload }) => {
      state.loading = true;
      state.coords = payload.coords;
      state.page = payload.page || 0;
    },
    fetchRestaurantsSuccess: (state, { payload }) => {
      state.loading = false;
      state.restaurants = [...state.restaurants, ...payload];
    },
    fetchRestaurantsFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
  },
});

export const {
  fetchRestaurants,
  fetchMore,
  fetchRestaurantsSuccess,
  fetchRestaurantsFail,
} = restaurantsSlice.actions;
export const selectRestaurants = (state: RootState) => state.restaurantsReducer;
export default restaurantsSlice.reducer;
