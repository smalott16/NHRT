//containts functions to retrieve streamflow information from 
//environment canada API
const axios = require('axios');

function streamStats(stationID) {

  axios.get('https://api.weather.gc.ca/collections/hydrometric-annual-statistics/items/08NL024.2019')
    .then(response => console.log(response.data));

};

streamStats();