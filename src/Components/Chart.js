import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    } 
    
    static defaultProps = {
        displayLegend: true,
        legendPosition: 'right'     
    }

    render() {
        return (
            <div className="chart">
            <Pie
                data={this.state.chartData}
                // height={200}
                options={{ 
                    legend: {
                      display: this.props.displayLegend,
                      position: this.props.legendPosition                        
                    }
                }}
            />
            </div>
        )
    }
    
}

export default Chart;
