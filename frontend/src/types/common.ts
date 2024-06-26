import { AlertColor } from "@mui/material";
export interface IEvent {
  _id?: string;
  description: string;
  price: number;
  startDate: string;
  endDate: string;
}

export interface IMessagInfo {
  serverity: AlertColor;
  message: string;
}
