export const ALERT_MESSAGES: Record<string, any> = {
  get: {
    message: "All events received successfully!",
    serverity: "info",
  },
  create: { message: "Event saved succesfully!", serverity: "success" },
  update: { message: "Event updated succesfully!", serverity: "warning" },
  delete: { message: "Event removed succesfully!", serverity: "error" },
  error: { message: "An error occured unexpectedly!", serverity: "error" },
};
