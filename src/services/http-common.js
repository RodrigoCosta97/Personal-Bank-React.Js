import axios from "axios";

export default axios.create({
   baseURL: "https://academy.api1.blissapplications.com",
   headers: {
      "Content-type": "application/json",
   },
});
