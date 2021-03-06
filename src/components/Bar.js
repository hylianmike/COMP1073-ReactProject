// import component and Bar
import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';

// create a class that extends to the component class
class BarChart extends Component{
    // constructor for the component
    constructor(props){
        super(props);
        // set the state to the data for the chart
        this.state = {
            chartData: {
                // set the labels, indicates the amount of dollars spent per transaction
                labels:['0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80', '81 - 90', '91 - 100', 'Over 100'],
                // set the actual data values
                datasets:[{
                    // set numerical values
                    data: [1569, 9363, 10625, 10244, 8278, 5595, 3312, 1601, 676, 254, 98],
                    // set the different background colours for the columns
                    backgroundColor:['rgba(255, 0, 0, 0.6)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)', 'rgba(0, 255, 255, 0.6)', 'rgba(255, 0, 255, 0.6)', 'rgba(255, 255, 0, 0.6)', 
                                    'rgba(249, 138, 217, 0.6)', 'rgba(255, 95, 0, 0.6)', 'rgba(209, 209, 209, 0.6)', 'rgba(141, 119, 11, 0.6)', 'rgba(239, 152, 154, 0.6)'],
                    // set the border information
                    borderWidth: 1,
                    borderColor: 'grey',
                    // set the hover information
                    hoverBorderWidth: 4,
                    hoverBorderColor: 'black'
                }]
            }
        }
    }

    // render function that returns a div with a Bar chart from Chart.js
    render(){
        return(
            <div className="chart">
                <Bar
                    // set the data to the state variable
                    data={this.state.chartData}
                    // set the options
                    options={{
                        plugins: {
                            // set the title of the chart
                            title:{
                                display: true,
                                text: 'Cost of Transactions that were involved in Fraud',
                                font: {
                                    size: 35,
                                    family: "'Times New Roman', Times, serif",
                                }
                            },
                            // remove the legend from appearing
                            legend:{ display: false }
                        },
                        scales: {
                            // set the x-axis title
                            x: {
                                title: {
                                    display: true,
                                    text: 'Purchase Value ($)',
                                    font: {
                                        size: 20
                                    }
                                }
                            },
                            // set the y-axis title
                            y: {
                                title: {
                                    display: true,
                                    text: 'Number of Transactions',
                                    font: {
                                        size: 20
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

export default BarChart;