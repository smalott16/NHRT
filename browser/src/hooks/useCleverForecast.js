//hook that fetches data from the clever model
import { useState, useEffect } from 'react';
import { fetchForecast } from '../helpers/helpers';
import axios from 'axios';

function useCleverForecast() {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetchForecast('08MD013')
      .then((data) => {
        console.log(data);
        setForecast(data)
      })

  }, []);
  return { forecast }
}

export default useCleverForecast;