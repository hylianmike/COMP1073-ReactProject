import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

class LineChart extends Component{

    constructor(props){
        super(props);
        this.state={
            chartData: {
                // set the labels, indicates the amount of dollars spent per transaction
                labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                // set the actual data values
                datasets:[{
                    // set the label, and numerical values
                    label: 'Number of Transactions',
                    data: [3447, 2217, 4225, 5630, 6496, 6413, 6674, 6386, 4972, 3345, 1614, 196],
                    // set the different background colours for the columns
                    backgroundColor:['rgba(255, 0, 0, 0.6)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)', 'rgba(0, 255, 255, 0.6)', 'rgba(255, 0, 255, 0.6)', 'rgba(255, 255, 0, 0.6)', 
                                    'rgba(249, 138, 217, 0.6)', 'rgba(255, 95, 0, 0.6)', 'rgba(209, 209, 209, 0.6)', 'rgba(141, 119, 11, 0.6)', 'rgba(239, 152, 154, 0.6)', 'rgba(24, 21, 21, 0.76)'],
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

    render(){
        return(
            <div className="chart">
                <Line 
                    data={this.state.chartData}
                    options={{
                        plugins: {
                            // set the title of the chart
                            title:{
                                display: true,
                                text: 'Amount of Transactions that were involved in Fraud in a Given Month',
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
                                    text: 'Month',
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

export default LineChart;