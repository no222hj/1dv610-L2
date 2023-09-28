import { SimpleCharts } from '../../src/js/simpleCharts/simple-charts.js'


const dataSet = [
  {argument: 'One', value: 1, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'},
  {argument: 'Three', value: 3, color: '#F26B38'},
  {argument: 'Four', value: 4, color: '#6B5B95'},
  {argument: 'Five', value: 5, color: '#D64161'}
]

const simpleCharts = new SimpleCharts(dataSet)

try {
const chartModuleValue = new SimpleCharts(dataSet)
const pieChart = chartModuleValue.plotPieChart()
const chartOptions = {
  size: {
    width: 600,
    height: 600
  }
}
chartModuleValue.editOptions(chartOptions)
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


