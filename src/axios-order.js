import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-redux-main-9bf5c-default-rtdb.firebaseio.com/",
});

export default instance;
