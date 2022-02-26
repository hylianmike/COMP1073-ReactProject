import React, { Component } from "react";
import { Radar } from 'react-chartjs-2';

class RadarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                // set the labels, indicates the amount of dollars spent per transaction
                labels:['11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80'],
                // set the actual data values
                datasets:[{
                    // set the label, and numerical values
                    label: 'Ages of Fraudsters',
                    data: [3086, 18209, 20156, 8614, 1447, 101, 2],
                    backgroundColor: 'rgba(255, 165, 0, 0.5)',
                }]
            }
        }
    }

    render(){
        return(
            <div className="chart">
                <Radar 
                    data={this.state.chartData}
                    options={{
                        plugins: {
                            // set the title of the chart
                            title:{
                                display: true,
                                text: 'Ages of Fraudsters',
                                font: {
                                    size: 35,
                                    family: "'Times New Roman', Times, serif",
                                }
                            },
                            // remove the legend from appearing
                            legend:{ display: false }
                        }
                    }}
                />
            </div>
        )
    }
}

export default RadarChart;