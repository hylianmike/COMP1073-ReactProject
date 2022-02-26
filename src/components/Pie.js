import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class PieChart extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            chartData: 
            {
                // set the labels
                labels:['Chrome', 'IE', 'Safari'],

                // set thedata values
                datasets:
                [{
                    // set the label
                    label: 'Browser Type',

                    // numerical values
                    data: [20986, 12603, 8376],

                    // set the different background colours for the columns
                    backgroundColor:['rgba(255, 0, 0, 0.6)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)'],

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

    render()
    {
        return(
            <div className="chart">
                <Pie 
                    data={this.state.chartData}
                    options=
                    {{
                        plugins: 
                        {
                            // set title of the chart
                            title:
                            {
                                display: true,
                                text: 'Browsers that were involved in Fraud',
                                font: 
                                {
                                    size: 35,
                                    family: "'Times New Roman', Times, serif",
                                }
                            },

                            // remove legend from appearing
                            legend:{ display: true }
                        }
                    }}
                />
            </div>
        )
    }
}

export default PieChart;
