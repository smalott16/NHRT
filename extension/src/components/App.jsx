import '../styles/App.css';
import '../styles/Nav.css';
import Nav from './Nav'
import ScatterPlot from './ScatterPlot';
import useGoogleCharts from "../hooks/useGoogleCharts";

function App() {
  
  const { google } = useGoogleCharts();

  return (
    <div className="App">
      <Nav />
      <section>
        <ScatterPlot google={google} />
      </section>
    </div>
  );
}

export default App;
