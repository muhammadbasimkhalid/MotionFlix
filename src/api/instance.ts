import axios, { AxiosInstance } from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODZmYjcwY2QxZjE1Njc1YzQwNDM4ZDNkN2FlMDg5OSIsInN1YiI6IjY0YjZmZjk5ZWMwYzU4MDE0OTU3YjJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Km3_4sOrNY10OHhpZ1uQMMdvnfzf_E-T-W9Z4rEyxVQ"
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    accept: "application/json",
  },
});

export default axiosInstance;
