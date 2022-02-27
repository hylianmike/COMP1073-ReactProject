// import components from components directory
import { Chart as Chartjs } from 'chart.js/auto';
import BarChart from './components/Bar';
import LineChart from './components/Line';
import PieChart from './components/Pie';
import RadarChart from './components/Radar';

// main App function
function App() {
return (
	// return div with a container-fluid class
	<div className="App container-fluid">
		{/* link bootstrap */}
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
		{/* title and header for the site */}
		<h1 className='text-center'><u>Using Chart.js in React</u></h1>
		<h2 className='text-center'>E-commerce Transactions that were Involved in Fraud</h2>
		<p className='text-center'>Project By: Mike Rosanelli, Jack Douma, Chris Veilleux</p>
		{/* first row that contains two divs, that has the bar chart and line charts */}
		<div className='row'>
			<div className='col-lg-6 col-md-12'>
				<BarChart />	
			</div>
			<div className='col-lg-6 col-md-12'>
				<LineChart />
			</div>
		</div>
		{/* second row that contains two dive, that has the pie and radar charts */}
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

// export the App
export default App;
