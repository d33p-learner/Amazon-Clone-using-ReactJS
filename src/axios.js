import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challange-6c24d/us-central1/api", // The API (cloud function) URL
});

export default instance;
