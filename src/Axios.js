import axios from "axios";
const instance = axios.create({
  baseURL: "https://tinder-backend-tw5x.onrender.com",
});

export default instance;
