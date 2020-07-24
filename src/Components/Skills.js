import React, { Component } from 'react';
import Chart from './Chart';


class Skills extends Component {
  constructor(props){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData(){
  
    this.setState({
      chartData:{
        labels: ['HTML5', 'CSS3/Sass', 'WordPress', 'JavaScript', 'React', 'Angular', 'MySQL', 'MongoDB', 'Typecript', 'Java'],
        datasets:[
          {
            label: 'Skills',
            data:[
              95,
              85,
              80,
              80,
              80,
              80,
              60,
              60,
              70,
              70,
            ],
            backgroundColor:[
              'rgb(0, 255, 128)',
              'rgb(0, 128, 255)',
              'rgb(0, 191, 255)',
              'rgb(0, 64, 255)',
              'rgb(64, 0, 255)',
              'rgb(0, 255, 255)',
              'rgb(0, 255, 191)',
              'rgb(191, 0, 255)',
              'rgb(255, 0, 191)',
              'rgb(255, 0, 64, 0.9)'
            ]
          }
        ]
      }
    })
  }

  render () {
    return (
      <div>
        <div id="skills" class="text-center">
        <div class="container">
          <div class="section-title center">
          <h2>Skills</h2>
          <hr />
          </div>
          <Chart chartData={this.state.chartData} legendPosition="bottom"/>
        </div>
        </div>
      </div>
  )
}
 
}

export default Skills;