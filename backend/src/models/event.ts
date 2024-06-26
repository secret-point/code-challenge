import { IEvent } from "../types/event";
import mongoose, { Document, Schema } from "mongoose";

const eventSchema: Schema = new Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Event = mongoose.model<IEvent>("Event", eventSchema);

export default Event;
