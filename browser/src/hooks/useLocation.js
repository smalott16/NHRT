import { useState, useEffect } from 'react';
const axios = require('axios');

function useLocation() {

  const [coordinates, setCoordinates] = useState([null, null])

  useEffect(() => {
    console.log("in da location!");

    const url = `http://ip-api.com/json/`

    axios.get(url)
      .then((res) => {
        setCoordinates([res.data.lat, res.data.long])
      })

    
  }, [])

  return {coordinates}
}

export default useLocation;