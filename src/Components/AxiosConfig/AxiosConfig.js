import axios from "axios";

const instance = axios.create({
  baseURL: "https://warm-sea-72036.herokuapp.com",
});

export default instance;
