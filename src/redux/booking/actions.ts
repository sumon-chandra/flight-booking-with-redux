import { BookingInfo } from "../../types";
import { BOOKING, DELETE } from "./actionTypes";

export const booking = (bookingInfo: BookingInfo) => {
  return {
    type: BOOKING,
    payload: bookingInfo,
  };
};

export const deleteFlight = (id: number) => {
  return {
    type: DELETE,
    payload: id,
  };
};
