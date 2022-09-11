import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/c-81b31/us-central1/api", // cloud function
});

export default instance;