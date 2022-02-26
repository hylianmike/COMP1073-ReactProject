import { Chart as Chartjs } from 'chart.js/auto';
import BarChart from './components/Bar'
import Radar from './components/Radar'
import PieChart from './components/Pie'

function App() {
return (
	<div className="App">
        <BarChart />
		<Radar />
        	<BarChart />
		<PieChart />
	</div>
);
}

export default App;
