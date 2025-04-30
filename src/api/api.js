import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiInstans = axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});
export default apiInstans;
