import axios from "axios";

//insert your Twitch API key into this variable for the project to work
let API_KEY = "iuo8pg8xtvgn0im39my4kogj0axii1";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY
  }
});

export default api;
