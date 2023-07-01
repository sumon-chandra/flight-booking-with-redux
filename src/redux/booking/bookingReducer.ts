import { Action, BookingInfo } from "../../types";
import { BOOKING } from "./actionTypes";

const initialState: BookingInfo[] = [];

const bookingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case BOOKING:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default bookingReducer;
