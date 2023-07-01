import { Action, BookingInfo } from "../../types";
import { BOOKING, DELETE } from "./actionTypes";

const initialState: BookingInfo[] = [];

const bookingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case BOOKING:
      return [...state, action.payload];

    case DELETE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookingReducer;
