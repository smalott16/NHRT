import ScatterPlot from './ScatterPlot';
import useCleverForecast from '../hooks/useCleverForecast';

function ChartContainer(props) {

  const { google } = props;
  const { forecast } = useCleverForecast();

  return (
    <div id="hello">
      <ScatterPlot google={google}/>
    </div>
  )
}

export default ChartContainer;