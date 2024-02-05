import axios from "axios";

const token = localStorage.getItem("token");
console.log("Token:", token); // Check if token is undefined or null
const axiosPublic = axios.create({
  // baseURL: "http://localhost:8000/api/v1",
  baseURL: "https://simple-design-server.vercel.app/api/v1",

  headers: {
    authorization: token,
  },
});

const baseUrlPublic = () => {
  return axiosPublic;
};

export default baseUrlPublic;
