import axios from "axios";
import { BASE_URL } from "./Constants";

const instance = axios.create({
    baseURL: BASE_URL, // Your API base URL
    timeout: 5000, // Set a timeout for requests
});

export default instance;