export interface BookingInfo {
  id: number;
  from: string;
  to: string;
  date: string;
  guests: number;
  ticketClassName: string;
}

export interface Action {
  type: string;
  payload: BookingInfo | number;
}

export interface RootReducer {
  bookingInfo: BookingInfo[];
}
