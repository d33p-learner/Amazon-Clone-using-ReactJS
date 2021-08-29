import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challange-6c24d.cloudfunctions.net/api", // The API (cloud function) URL
  //"http://localhost:5001/challange-6c24d/us-central1/api",
});

export default instance;
