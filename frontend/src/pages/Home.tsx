import React, { useState } from "react";
import { EventForm } from "../components/EventForm";
import { EventList } from "../components/EventList";
import { Box, Container } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEvents } from "../hooks/useEvents";
import { IEvent } from "../types/common";

const Home: React.FC = () => {
  const [eventSearch, setEventSearch] = useState<IEvent>({
    price: 0,
    description: "",
    startDate: "",
    endDate: "",
  });

  const {
    events,
    setEvents,
    messageInfo,
    selectedEvent,
    setSelectedEvent,
    open,
    setOpen,
    getAllEvents,
    addEvent,
    updateEvent,
    deleteEvent,
  } = useEvents();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", p: 5, gap: 5 }}>
        <Box sx={{ width: 900 }}>
          <EventList
            events={events}
            getAllEvents={getAllEvents}
            setEvents={setEvents}
            setSelectedEvent={setSelectedEvent}
            deleteEvent={deleteEvent}
          />
        </Box>
        <Box>
          <EventForm
            addEvent={addEvent}
            updateEvent={updateEvent}
            selectedEvent={selectedEvent}
          />
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={messageInfo.serverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {messageInfo.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
