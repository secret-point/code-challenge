import React from "react";
import { EventForm } from "../components/EventForm";
import { EventList } from "../components/EventList";
import { Box, Container } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEvents } from "../hooks/useEvents";

const Home: React.FC = () => {
  const {
    events,
    messageInfo,
    selectedEvent,
    setSelectedEvent,
    open,
    setOpen,
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
    <Container maxWidth="md">
      <Box sx={{ display: "flex", p: 5, gap: 5 }}>
        <Box sx={{ width: 500 }}>
          <EventList
            events={events}
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
