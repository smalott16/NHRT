import '../styles/App.css';
import '../styles/Nav.css';
import Nav from './Nav'
//import ScatterPlot from './ScatterPlot';
import ChartContainer from './ChartContainer';
import useLocation from "../hooks/useLocation";

//import useGoogleCharts from "../hooks/useGoogleCharts";

function App() {
  
  //const { google } = useGoogleCharts();
  const { coordinates } = useLocation();

  return (
    <div className="App">
      <Nav />
      <section>
        <ChartContainer />
      </section>
    </div>
  );
}

export default App;
