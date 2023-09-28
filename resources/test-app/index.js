import { SimpleCharts } from '../../src/js/simpleCharts/simple-charts.js'


const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 3, color: '#EFC958'}
]

const chartOptions = {
  yAxis: {
    maxValue: 10
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


