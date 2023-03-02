import axios from "axios";

const blogTech = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default blogTech;
