// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from 'chart.js/auto';

function App() {
return (
	<div className="App">
    <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
    <div>
      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
          datasets: [{
            // Label for bars
            label: "total count/value",
            // Data or value of your each variable
            data: [1552, 1319, 613, 1400],
            // Color of each bar
            backgroundColor: ["aqua", "green", "red", "yellow"],
            // Border color of each bar
            borderColor: ["aqua", "green", "red", "yellow"],
            borderWidth: 0.5,
          }],
        }}
        // Height of graph
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                // The y-axis value will start from zero
                beginAtZero: true,
              },
            }]
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
	</div>
);
}

export default App;
