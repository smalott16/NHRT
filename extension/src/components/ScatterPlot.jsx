import { useEffect, useState } from "react";
import useGoogleCharts from "../hooks/useGoogleCharts";

function ScatterPlot() {

  const { google } = useGoogleCharts();
  const [chart, setChart] = useState(null);
  
  useEffect(() => {
    
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
      ]);

      // Set chart options
      var options = {'title':'How Much Pizza I Ate Last Night',
                    'width':400,
                    'height':300};

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.PieChart(document.getElementById('scatterPlot'));
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