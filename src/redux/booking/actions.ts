import { BookingInfo } from "../../types";
import { BOOKING } from "./actionTypes";

export const booking = (bookingInfo: BookingInfo) => {
  return {
    type: BOOKING,
    payload: bookingInfo,
  };
};
