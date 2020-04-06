import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-1d6d2.firebaseio.com/"
});

export default instance;
