import axios from 'axios';

const api =  axios.create({
    baseURL: "http://10.1.30.90:5000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization : localStorage.getItem("accessToken"),

    }
    });


export default api