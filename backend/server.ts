import app from "./src/app";
import { connectDB } from "./src/config/db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
