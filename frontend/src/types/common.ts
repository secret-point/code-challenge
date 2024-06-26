import { AlertColor } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";
import { Range } from "react-date-range";

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
