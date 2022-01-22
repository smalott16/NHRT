import '../styles/App.css';
import '../styles/Nav.css';
import Nav from './Nav'
import ChartContainer from './ChartContainer';
import useLocation from "../hooks/useLocation";
import useGoogleCharts from "../hooks/useGoogleCharts";

function App() {
  
  const { google } = useGoogleCharts();
  const { coordinates } = useLocation();

  return (
    <div className="App">
      <Nav />
      <section>
        <ChartContainer google={google}/>
      </section>
    </div>
  );
}

export default App;
