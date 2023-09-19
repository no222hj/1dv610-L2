import { ChartModule } from './chart-module/chart-module.js'

/**  const chartData = [
  {desc: '1', amount: 1, color: 'red'},
  {desc: '2', amount: 2, color: 'green'},
  {desc: '3', amount: 3, color: 'blue'},
  {desc: '4', amount: 4, color: 'black'},
  {desc: '5', amount: 5, color: 'pink'}
]
*/

const chartDataSingleValue = [
  {desc: '1', amount: 2, color: 'red'},
  {desc: '2', amount: 2, color: 'green'},
  {desc: '3', amount: 1, color: 'blue'},
  {desc: '4', amount: 4, color: 'black'},
  {desc: '5', amount: 5, color: 'pink'},
  {desc: '6', amount: 6, color: 'yellow'},
]

const chartDataDoubleValue = [
  {desc: '1', amountX: 2, amountY: 1, color: 'red'},
  {desc: '2', amountX: 2, amountY: 2, color: 'green'},
  {desc: '3', amountX: 1, amountY: 3, color: 'blue'},
  {desc: '4', amountX: 4, amountY: 4, color: 'black'},
  {desc: '5', amountX: 5, amountY: 5, color: 'pink'},
]

const chartOptions = {
  type: 'bar'
}

const chartModuleSingleValue = new ChartModule(chartDataSingleValue, chartOptions)
const chartModuleDoubleValue = new ChartModule(chartDataDoubleValue, chartOptions)
const pieChart = chartModuleSingleValue.plotPieChart()
const barChart = chartModuleSingleValue.plotBarChart()
const lineChart = chartModuleDoubleValue.plotLineChart()
document.getElementById('pieChart').appendChild(pieChart)
document.getElementById('barChart').appendChild(barChart)
document.getElementById('lineChart').appendChild(lineChart)
