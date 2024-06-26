import React from "react";
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
} from "@mui/material";
import { IEvent } from "../../types/common";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { toISOFormat } from "../utils/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface IEventList {
  events: IEvent[];
  deleteEvent: (id: string) => void;
  setSelectedEvent: (event: IEvent) => void;
}

export const EventList: React.FC<IEventList> = ({
  events,
  deleteEvent,
  setSelectedEvent,
}) => {
  if (!events.length)
    return (
      <Typography variant="body2" color="text.secondary">
        No events
      </Typography>
    );
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
        {events.map((event, index) => (
          <>
            <ListItem
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
    </Box>
  );
};
