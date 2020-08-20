import React from "react";
import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseURL: "https://bw-pintereach-aja.herokuapp.com/api/",
    headers: {
      Authorization: token,
    },
  });
};
