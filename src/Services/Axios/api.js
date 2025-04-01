import  axios from "axios";

export const apiRequests = axios.create({
   baseURL: "https://sudden-grandiose-cabbage.glitch.me/",
   headers : {
      "Content-Type": 'application/json'
   }
})