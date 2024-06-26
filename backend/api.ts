import express from "express";
import { responseCode } from "./src/helpers/responseCode";
import { responseWithError } from "./src/helpers/responseHandle";
import eventRoutes from "./src/routes/eventRoutes";

const router = express.Router();

router.use("/event", eventRoutes);

router.all("*", function (req, res, next) {
  return responseWithError(res, responseCode.NOT_FOUND, "Route Not Found!");
});

export default router;
