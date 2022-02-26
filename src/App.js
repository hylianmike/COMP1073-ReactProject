import { Chart as Chartjs } from 'chart.js/auto';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import PieChart from './components/Pie';
import RadarChart from './components/Radar';

function App() {
return (
	<div className="App container-fluid">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
		<h1 className='text-center'><u>Charts in React are Painful</u></h1>
		<p className='text-center'>Project By: Mike Rosanelli, Jack Douma, Chris Veilleux</p>
		<div className='row'>
			<div className='col-lg-6 col-md-12'>
				<BarChart />	
			</div>
			<div className='col-lg-6 col-md-12'>
				<LineChart />
			</div>
		</div>
		<div className='row'>
			<div className='col-lg-6 col-md-12'>
				<PieChart />
			</div>
			<div className='col-lg-6 col-md-12'>
				<RadarChart />
			</div>
		</div>	
	</div>
);
}

export default App;
