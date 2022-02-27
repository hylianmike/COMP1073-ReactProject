// import component and Radar
import React, { Component } from "react";
import { Radar } from 'react-chartjs-2';

// create a class that extends to the component class
class RadarChart extends Component{
    // constructor for the component
    constructor(props){
        super(props);
        // set the state to the data for the chart
        this.state = {
            chartData: {
                // set the labels, indicates the amount of dollars spent per transaction
                labels:['< 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '> 70'],
                // set the actual data values
                datasets:[{
                    // set the numerical values
                    data: [3086, 18209, 20156, 8614, 1447, 101, 2],
                    backgroundColor: 'rgba(255, 165, 0, 0.5)',
                }]
            }
        }
    }

    // render function that returns a div with a Bar chart from Chart.js
    render(){
        return(
            <div className="chart">
                <Radar
                    // set the data to the state variable
                    data={this.state.chartData}
                    // set the options
                    options={{
                        plugins: {
                            // set the title of the chart
                            title:{
                                display: true,
                                text: 'Ages of Fraudsters (Years)',
                                font: {
                                    size: 35,
                                    family: "'Times New Roman', Times, serif",
                                }
                            },
                            // remove the legend from appearing
                            legend:{ display: false }
                        },
                        // set the labels to be larger
                        scales: {
                            r: {
                                pointLabels: {
                                    font:{
                                        size: 15
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default RadarChart;