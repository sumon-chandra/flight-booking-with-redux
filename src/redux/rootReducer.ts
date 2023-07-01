import { combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  bookingInfo: bookingReducer,
});

export default rootReducer;
