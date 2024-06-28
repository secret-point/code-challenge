import React, { useState } from "react";
import { IEvent } from "../../types/common";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import dayjs, { Dayjs } from "dayjs";
import { toISOFormat } from "../utils/utils";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

export const EventRangePicker = () => {
  const [eventData, setEventData] = useState<IEvent>({
    price: 0,
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (newRange: DateRange<Dayjs>) => {
    setEventData({
      ...eventData,
      startDate: toISOFormat(newRange[0]),
      endDate: toISOFormat(newRange[1]),
    });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={[dayjs(eventData.startDate), dayjs(eventData.endDate)]}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            required: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};
