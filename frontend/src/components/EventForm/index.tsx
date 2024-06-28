import React, { useEffect, useState } from "react";
import { IEvent } from "../../types/common";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import {
  DateRange,
  DateRangePicker,
  LocalizationProvider,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { toISOFormat } from "../utils/utils";

interface EventFormProps {
  addEvent: (event: IEvent) => void;
  updateEvent: (event: IEvent) => void;
  selectedEvent?: IEvent;
}

export const EventForm: React.FC<EventFormProps> = ({
  selectedEvent,
  addEvent,
  updateEvent,
}) => {
  const [eventData, setEventData] = useState<IEvent>(
    selectedEvent || {
      price: 0,
      description: "",
      startDate: "",
      endDate: "",
    }
  );

  useEffect(() => {
    selectedEvent && setEventData(selectedEvent);
  }, [selectedEvent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (newRange: DateRange<Dayjs>) => {
    setEventData({
      ...eventData,
      startDate: toISOFormat(newRange[0]),
      endDate: toISOFormat(newRange[1]),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !selectedEvent ? addEvent(eventData) : updateEvent(eventData);
    setEventData({ price: 0, description: "", startDate: "", endDate: "" });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        value={eventData.description}
        onChange={handleChange}
        required
      />
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          label="Price"
          name="price"
          type="number"
          value={eventData.price}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          required
        />
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
          value={[dayjs(eventData.startDate), dayjs(eventData.endDate)]}
          onChange={handleDateChange}
          slotProps={{
            actionBar: { actions: [] },
          }}
          calendars={2}
        />
      </LocalizationProvider>
      <Button type="submit" variant="contained" color="primary">
        {selectedEvent ? "Update Event" : "Add Event"}
      </Button>
    </Box>
  );
};
