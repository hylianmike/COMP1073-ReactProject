import { Chart as Chartjs } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import BarChart from './components/Bar'
import PieChart from './components/Pie'

function App() {
return (
	<div className="App">
        <BarChart />
		<PieChart />
		<LineChart />
	</div>
);
}

export default App;
