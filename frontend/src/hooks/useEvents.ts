import { useEffect, useState } from "react";
import { IEvent, IMessagInfo } from "../types/common";
import axiosInstance from "../config/axiosConfig";
import { ALERT_MESSAGES } from "../constants/common";

export const useEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent>();
  useEffect(() => {
    axiosInstance.get("/event/all").then((res) => {
      setEvents(res.data);
      setMessageInfo(ALERT_MESSAGES["get"]);
      setOpen(true);
    });
  }, []);
  const [messageInfo, setMessageInfo] = useState<IMessagInfo>(
    ALERT_MESSAGES["get"]
  );
  const addEvent = (event: IEvent) => {
    axiosInstance
      .post("/event", {
        ...event,
      })
      .then((res) => {
        setMessageInfo(ALERT_MESSAGES["create"]);
        setOpen(true);
        setEvents([...events, res.data]);
      })
      .catch(() => {
        setMessageInfo(ALERT_MESSAGES["error"]);
        setOpen(true);
      });
  };

  const deleteEvent = (id: string) => {
    axiosInstance
      .delete(`/event/${id}`)
      .then(() => {
        setMessageInfo(ALERT_MESSAGES["delete"]);
        setOpen(true);
        setEvents(events.filter((event) => event._id !== id));
      })
      .catch(() => {
        setMessageInfo(ALERT_MESSAGES["error"]);
        setOpen(true);
      });
  };

  const updateEvent = (event: IEvent) => {
    console.log(event);
    axiosInstance
      .patch(`/event/${event._id}`)
      .then((res) => {
        setMessageInfo(ALERT_MESSAGES["update"]);
        setOpen(true);
        setEvents(
          events.map((_event) => (_event._id === event._id ? event : _event))
        );
        setSelectedEvent(undefined);
      })
      .catch(() => {
        setMessageInfo(ALERT_MESSAGES["error"]);
        setOpen(true);
      });
  };
  return {
    events,
    setEvents,
    open,
    setOpen,
    selectedEvent,
    setSelectedEvent,
    addEvent,
    updateEvent,
    deleteEvent,
    messageInfo,
  };
};
