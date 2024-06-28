import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { IEvent } from "../../types/common";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { toISOFormat } from "../utils/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  DateRange,
  DateRangePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import axiosInstance from "../../config/axiosConfig";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
interface IEventList {
  events: IEvent[];
  setEvents: (events: IEvent[]) => void;
  getAllEvents: () => void;
  deleteEvent: (id: string) => void;
  setSelectedEvent: (event: IEvent) => void;
}

export const EventList: React.FC<IEventList> = ({
  events,
  setEvents,
  getAllEvents,
  deleteEvent,
  setSelectedEvent,
}) => {
  const [eventData, setEventData] = useState<IEvent>({
    price: 0,
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (newRange: DateRange<Dayjs>) => {
    const [startDate, endDate] = [
      toISOFormat(newRange[0]),
      toISOFormat(newRange[1]),
    ];
    setEventData({
      ...eventData,
      startDate,
      endDate,
    });
    if (startDate && endDate)
      axiosInstance
        .post(`/event/search`, {
          startDate,
          endDate,
        })
        .then((res) => {
          setEvents(res.data);
        });
  };

  const handleReset = () => {
    setEventData({ price: 0, description: "", startDate: "", endDate: "" });
    getAllEvents();
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            value={[dayjs(eventData.startDate), dayjs(eventData.endDate)]}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        <Button
          sx={{ width: 150 }}
          variant="contained"
          endIcon={<RestartAltIcon />}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
      {events.length ? (
        <List
          sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        >
          {events.map((event, index) => (
            <>
              <ListItem
                key={`event-${index}`}
                secondaryAction={
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteEvent(event._id || "")}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => setSelectedEvent(events[index])}
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <EventNoteIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={event.description}
                  secondary={`${toISOFormat(event.startDate)} to ${toISOFormat(
                    event.endDate
                  )}`}
                />
                <ListItemText secondary={`$${event.price}`} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No events
        </Typography>
      )}
    </Box>
  );
};
