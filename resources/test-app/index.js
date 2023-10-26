import { SimpleCharts } from '../../src/js/simpleCharts/simple-charts.js'


const dataSet = [
  {argument: 'One', value: 1, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'},
  {argument: 'Three', value: 3, color: '#F26B38'},
  {argument: 'Four', value: 4, color: '#6B5B95'},
  {argument: 'Five', value: 5, color: '#D64161'},
  {argument: 'Six', value: 6, color: '#FF7B25'},
  {argument: 'Seven', value: 7, color: '#FFD460'},
  {argument: 'Eight', value: 8, color: '#E9E9EB'},
  {argument: 'Nine', value: 9, color: '#5D535E'},
  {argument: 'Ten', value: 10, color: '#D64161'},
  {argument: 'One', value: 1, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'},
  {argument: 'Three', value: 3, color: '#F26B38'},
  {argument: 'Four', value: 4, color: '#6B5B95'},
  {argument: 'Five', value: 5, color: '#D64161'},
  {argument: 'Six', value: 6, color: '#FF7B25'},
  {argument: 'Seven', value: 7, color: '#FFD460'},
  {argument: 'Eight', value: 8, color: '#E9E9EB'},
  {argument: 'Nine', value: 9, color: '#5D535E'},
  {argument: 'Ten', value: 10, color: '#D64161'}
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
const barChart = chartModuleValue.plotBarChart()
const lineChart = chartModuleValue.plotLineChart()
chartModuleValue.editOptions(chartOptions)
const doughnutChart = chartModuleValue.plotDoughnutChart()
document.getElementById('pieChart').appendChild(pieChart)
document.getElementById('barChart').appendChild(barChart)
document.getElementById('lineChart').appendChild(lineChart)
document.getElementById('doughnutChart').appendChild(doughnutChart)
} catch (error) {
  console.log(error)
}


