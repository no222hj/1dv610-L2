import { ChartModule } from './chart-module/chart-module.js'

/**  const chartData = [
  {desc: '1', amount: 1, color: 'red'},
  {desc: '2', amount: 2, color: 'green'},
  {desc: '3', amount: 3, color: 'blue'},
  {desc: '4', amount: 4, color: 'black'},
  {desc: '5', amount: 5, color: 'pink'}
]
*/

const chartData = [
  {desc: '1', amount: 1, color: 'red'},
  {desc: '2', amount: 1, color: 'green'},
  {desc: '3', amount: 1, color: 'blue'},
]

const chartModule = new ChartModule(chartData)
const pieChart = chartModule.plotPieChart()
const barChart = chartModule.plotBarChart()
document.getElementById('pieChart').appendChild(pieChart)
document.getElementById('barChart').appendChild(chartModule.plotBarChart())
