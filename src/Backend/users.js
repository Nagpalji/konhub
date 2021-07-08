import axios from "axios";

const response = () => {
  return axios
    .post("https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod", {
      limit: 1000,
      offset: 0,
    })
    .then(function (res) {
      console.log(res);
    });
};

export default response;
