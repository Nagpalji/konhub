import React from "react";
import response from "./Backend/users";
import axios from "axios";
const App = () => {
  const head = [
    {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
  ];
  return (
    <>
      {axios
        .post(
          "https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod",
          {
            limit: 1000,
            offset: 0,
          },
          head
        )
        .then((res) => {
          console.log(res);
        })}
    </>
  );
};

export default App;
