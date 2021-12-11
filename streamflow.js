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
    let identifier = yearlyData.properties.IDENTIFIER.split(".");
    let year = identifier[1];

    //determine what stat category we are looking at
    let streamflowStatKey;
    let streamflowStatValue;

    if (yearlyData.properties.DATA_TYPE_EN === 'Water Level') {
      streamflowStatKey = "maxDailyAvgLevel"; 
      streamflowStatValue = yearlyData.properties.MAX_VALUE ;

    // } else if (yearlyData.properties.DATA_TYPE_EN === 'Discharge' && !identifier[3]) {
    //   streamflowStatKey = "maxDailyAvgFlow";
    //   streamflowStatValue = yearlyData.properties.MAX_VALUE;

    // } else if (yearlyData.properties.DATA_TYPE_EN === 'Discharge' && yearlyData.properties.PEAK_CODE === 'Maximum') { 
    //   streamflowStatKey = "maxDailyInstFlow";
    //   streamflowStatValue = yearlyData.properties.PEAK ;
    //   console.log(streamflowStatValue);
      
    } else {
      continue;
    }
    streamStats[year] = {[streamflowStatKey]: streamflowStatValue};
  }
  
  console.log(streamStats)
}

const args = process.argv;
streamStats(args);