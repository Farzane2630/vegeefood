import  axios from "axios";

export const apiRequests = axios.create({
   baseURL: " http://localhost:3000/",
   headers : {
      "Content-Type": 'application/json'
   }
})