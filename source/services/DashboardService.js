import http from "./http-common";
import axios from "axios";

export const addUser = (firstName, lastName, userId) => {
   const userData = {
      fname: firstName,
      lname: lastName,
      userId: userId,
   };

   return axios
      .post(
         "http://localhost:8080/https://academy.api1.blissapplications.com/api/Dashboard/adduser",
         userData
      )
      .then((response) => {
         localStorage.setItem("userId", userId);
         return response.data;
      })
      .catch((error) => {
         throw error;
      });
};

const getAll = (uid) => {
   return http.get(`/api/Dashboard/getdashboardbyuserid/${uid}`);
};

const DashboardService = {
   getAll,
};

export default DashboardService;
