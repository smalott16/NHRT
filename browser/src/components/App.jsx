import '../styles/App.css';
import '../styles/Nav.css';
import Nav from './Nav'
import ScatterPlot from './ScatterPlot';
import ChartContainer from './ChartContainer';
import useGoogleCharts from "../hooks/useGoogleCharts";

function App() {
  
  const { google } = useGoogleCharts();

  return (
    <div className="App">
      <Nav />
      <section>
        <ScatterPlot google={google} />
        <ChartContainer />
      </section>
    </div>
  );
}

export default App;
