import { useEffect, useState } from "react";

function ScatterPlot(props) {

  const { google } = props;
  const [chart, setChart] = useState(null);
  
  useEffect(() => {
    
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
      data.addColumn('number', 'xValue');
      data.addColumn('number', 'yValue');
      data.addRows([
          [0, 0],
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5]
      ]);

      // Set chart options
      var options = {
        'title':'x vs y scatter',
        'width':400,
        'height':300,
        'hAxis': {title: 'x axis', minValue: 0, maxValue: 5},
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