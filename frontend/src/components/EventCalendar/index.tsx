import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, RangeKeyDict, Range } from "react-date-range";
import { addDays } from "date-fns";
import { IEvent } from "../../types/common";
import { EventForm } from "../EventForm";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { Box, TextField, Typography } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { Dayjs } from "dayjs";

export default function EventCalendar() {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    ranges.selection && setDateRange(ranges.selection);
  };
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 3,
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Select a Date Range
        </Typography>
        <DateRangeCalendar
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
