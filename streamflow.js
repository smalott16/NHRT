//containts functions to retrieve streamflow information from 
//environment canada API
const axios = require('axios');

function streamStats(stationID) {

  axios.get(`https://api.weather.gc.ca/collections/hydrometric-annual-statistics/items/?STATION_NUMBER=${stationID}`)
    .then(response => console.log(response.data));

};

const args = process.argv;
streamStats(args);