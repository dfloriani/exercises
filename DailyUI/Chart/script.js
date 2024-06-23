const xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "red",
      fill: false,
      pointBackgroundColor: "red",  // Fill color of the dots
      pointBorderColor: "red" 
    }, {
      data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
      borderColor: "#4e91cb",
      fill: false,
      pointBackgroundColor: "#4e91cb",  // Fill color of the dots
      pointBorderColor: "#4e91cb" 
    }, {
      data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
      borderColor: "#68cb23",
      fill: false,
      pointBackgroundColor: "#68cb23",   // Fill color of the dots
      pointBorderColor: "#68cb23"
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          fontColor: "#cccccc",
        },
        scaleLabel: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          drawOnChartArea: false, // Hide grid lines in the chart area
          drawTicks: false // Hide the ticks on the axis line
        }
      }],
      yAxes: [{
        ticks: {
          display: false
        },
        scaleLabel: {
          display: false
        },
        gridLines: {	
          drawBorder: false,
          drawOnChartArea: false, // Hide grid lines in the chart area
          drawTicks: false // Hide the ticks on the axis line
        }
      }]
    }
  }
});