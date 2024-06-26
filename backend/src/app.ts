import express from "express";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventRoutes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/event", eventRoutes);

export default app;
