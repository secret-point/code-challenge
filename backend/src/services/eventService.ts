import Event from '../models/event';

export const createAnEvent = async (eventData: any) => {
  const event = new Event(eventData);
  return await event.save();
};

export const getAllEvents = async () => {
  return await Event.find();
};

export const getAllEventsInRange = async (startDate: Date, endDate: Date) => {
  return await Event.find({
    startDate: { $gte: startDate },
    endDate: { $lte: endDate },
  });
};

export const updateAnEvent = async (id: string, eventData: any) => {
  return await Event.findByIdAndUpdate(id, eventData, { new: true });
};

export const deleteAnEvent = async (id: string) => {
  return await Event.findByIdAndDelete(id);
};
