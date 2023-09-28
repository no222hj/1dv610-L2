import { SimpleCharts } from '../../src/js/simpleCharts/simple-charts.js'


const dataSet = [
  {argument: 'One', value: 15, color: '#219C90'},
  {argument: 'Two', value: 6, color: '#EFC958'},
  {argument: 'Three', value: 12, color: '#F26B38'},
]

const chartOptions = {
  size: {
    width: 400,
    height: 400
  }
}



try {
const chartModuleValue = new SimpleCharts(dataSet, chartOptions)
const pieChart = chartModuleValue.plotPieChart()
const barChart = chartModuleValue.plotBarChart()
const lineChart = chartModuleValue.plotLineChart()
const doughnutChart = chartModuleValue.plotDoughnutChart()
document.getElementById('pieChart').appendChild(pieChart)
document.getElementById('barChart').appendChild(barChart)
document.getElementById('lineChart').appendChild(lineChart)
document.getElementById('doughnutChart').appendChild(doughnutChart)
} catch (error) {
  console.log(error)
}


