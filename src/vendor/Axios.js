import axios, { } from "axios";

let instance = axios.create({ baseURL: "https://api.deezer.com/" });

export default instance;
