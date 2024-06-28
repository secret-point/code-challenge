import {
  createAnEvent,
  deleteAnEvent,
  getAllEvents,
  getAllEventsInRange,
  updateAnEvent,
} from "../services/eventService";
import { Request, Response } from "express";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await createAnEvent(req.body);
    res.status(201).json(event);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getEventsInRange = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.body;
    console.log(startDate, endDate);
    const events = await getAllEventsInRange(
      new Date(startDate as string),
      new Date(endDate as string)
    );
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const event = await updateAnEvent(req.params.id, req.body);
    res.status(200).json(event);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    await deleteAnEvent(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
