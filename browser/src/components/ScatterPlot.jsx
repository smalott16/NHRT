import { useEffect, useState } from "react";

function ScatterPlot(props) {

  const { google, forecast } = props;
  const [chart, setChart] = useState(null);
  
  useEffect(() => {
    
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
      data.addColumn('date', 'xValue');
      data.addColumn('number', 'yValue');

      //NESTED LOOP - REFACTOR 
      for (let date in forecast) {
        let dateArray = date.split('-');
        let year = Number(dateArray[0]);
        let month = Number(dateArray[1]);
        let day = Number(dateArray[2]);

        for (let hour in forecast[date]) {
          let streamflow = Number(forecast[date][hour][0]);
          let chartDate = new Date(year, month -1, day, hour);
          data.addRows([
            [chartDate, streamflow]
          ])
        }
      }

      // Set chart options
      var options = {
        'title':'x vs y scatter',
        'width':400,
        'height':300,
        'hAxis': {format: 'M/d/yy', gridlines: {count: 15}},
        'vAxis': {title: 'y axis', minValue: 0, maxValue: 5},
        'legend': 'none'
      };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.ScatterChart(document.getElementById('scatterPlot'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart])

  return (
    <div>
      {!google && <h1>Loading!</h1>}
      <div id='scatterPlot' className={!google ? 'd-none' : ''} />
    </div>
  );
}

export default ScatterPlot;