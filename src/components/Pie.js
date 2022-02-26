// import component and Pie
import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

// create a class that extends to the component class
class PieChart extends Component
{
    // constructor for the component
    constructor(props)
    {
        super(props);
        // set the state to the data for the chart
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

    // render function that returns a div with a Bar chart from Chart.js
    render()
    {
        return(
            <div className="chart">
                <Pie 
                    // set the data to the state variable
                    data={this.state.chartData}
                    // set the options
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
                            // configure the text for the legend to be larger
                            legend:
                            {
                                labels:
                                {
                                    font:
                                    {
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

export default PieChart;
