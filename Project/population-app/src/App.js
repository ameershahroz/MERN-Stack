import logo from './logo.svg';
import './App.css';
import PopulationChart from './Population';
import { tenHighestPopulation } from './ten_most_highest_populations';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
      <PopulationChart data= {tenHighestPopulation}/>
      
    </div>
  );
}

export default App;
