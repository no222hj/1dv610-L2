import { ChartModule } from './chart-module/chart-module.js'

/**  const chartData = [
  {desc: '1', amount: 1, color: 'red'},
  {desc: '2', amount: 2, color: 'green'},
  {desc: '3', amount: 3, color: 'blue'},
  {desc: '4', amount: 4, color: 'black'},
  {desc: '5', amount: 5, color: 'pink'}
]
*/

const chartDataValue = [
  {desc: '1', amount: 2, color: 'red'},
  {desc: '2', amount: 2, color: 'green'},
  {desc: '3', amount: 1, color: 'blue'},
  {desc: '4', amount: 4, color: 'black'},
  {desc: '5', amount: 5, color: 'pink'},
  {desc: '6', amount: 6, color: 'yellow'}
  
  //give me more randomized data, the "amount" has to be random numbers between 0 and 150
]



const chartOptions = {
  type: 'bar',
  size: {
    width: 500,
    height: 500
  },
}

const chartModuleValue = new ChartModule(chartDataValue, chartOptions)
const pieChart = chartModuleValue.plotPieChart()
const barChart = chartModuleValue.plotBarChart()
const lineChart = chartModuleValue.plotLineChart()
const doughnutChart = chartModuleValue.plotDoughnutChart()
document.getElementById('pieChart').appendChild(pieChart)
document.getElementById('barChart').appendChild(barChart)
document.getElementById('lineChart').appendChild(lineChart)
document.getElementById('doughnutChart').appendChild(doughnutChart)

