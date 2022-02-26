import { Chart as Chartjs } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import BarChart from './components/Bar';
import LineChart from './components/Line';
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
		<LineChart />
	</div>
);
}

export default App;
