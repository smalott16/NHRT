const axios = require('axios');

const fetchForecast = function(stationID) {
  return axios.get(`/forecast/${stationID}`)
    .then((response) => {
      //parse off the header
      return response.data;
    })
    .catch(err => console.log(err.message))

};

export { fetchForecast };
