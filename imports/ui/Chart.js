import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.chartData
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
/*
{
  labels:["Reina Sofia", "San Ignacio", "La Colina", "Fundación Santa Fé"],
  datasets: [{
    label: 'ErWaitingTime',
    backgroundColor: 'rgba(0, 153, 255)',
    borderColor: 'rgba(0, 51, 153)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(0, 255, 0)',
    hoverBorderColor: 'rgba(0, 102, 0)',
    data: [65, 59, 80, 81]
  }]
}
*/
