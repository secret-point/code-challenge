import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const instance = axios.create({
  baseURL: API_BASE_URL,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
