//containts functions to retrieve streamflow information from 
//environment canada API
const axios = require('axios');

function streamStats(stationID) {
  
  const annualAvgStats = axios.get(`https://api.weather.gc.ca/collections/hydrometric-annual-statistics/items/?STATION_NUMBER=${stationID}`)
  const annualInstStats = axios.get(`https://api.weather.gc.ca/collections/hydrometric-annual-peaks/items/?STATION_NUMBER=${stationID}`)  

  Promise.all([annualAvgStats, annualInstStats])
    .then(results => {
      //construct an object containing the streamflow stats for each year
      for (let category of results) {
        addStreamStats(category)
      }

    })
    .catch(err => console.log(err.message))

    /* 
      Planned Data Structure
      [
        { year : 
          {
            maxDailyAvgFlow: number,
            maxDailyAvgLevel: number,
            maxInstFlow: number
            maxInstLevel: number
            flowUnits:
            levelUnits:
          }
        }  
      ]
    */
};

function addStreamStats(category) {
  const streamStats = {}

  for (let yearlyData of category.data.features) {
    const identifier = yearlyData.properties.IDENTIFIER.split(".");
    const year = identifier[1];
    streamStats[year] = {};
    
  }
  console.log(streamStats);
}

const args = process.argv;
streamStats(args);