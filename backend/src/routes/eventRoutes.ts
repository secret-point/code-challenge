import express from "express";
import {
  getEvents,
  updateEvent,
  createEvent,
  getEventsInRange,
  deleteEvent,
} from "../controllers/eventController";
const router = express.Router();

router.post("/", createEvent);
router.get("/all", getEvents);
router.get("/search", getEventsInRange);
router.patch("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
