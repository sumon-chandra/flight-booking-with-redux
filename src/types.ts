export interface BookingInfo {
  from: string;
  to: string;
  date: string;
  guests: number;
  ticketClassName: string;
}

export interface Action {
  type: string;
  payload: BookingInfo;
}

export interface RootReducer {
  bookingInfo: BookingInfo[];
}
