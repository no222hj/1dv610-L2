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
  {desc: '6', amount: 6, color: 'yellow'},
  {desc: '7', amount: 7, color: 'orange'},
  {desc: '8', amount: 8, color: 'purple'},
  {desc: '9', amount: 9, color: 'brown'},
  {desc: '10', amount: 16, color: 'grey'},
  {desc: '11', amount: 11, color: 'white'},
  {desc: '12', amount: 14, color: 'cyan'},
  {desc: '13', amount: 13, color: 'magenta'},
  {desc: '14', amount: 12, color: 'lime'},
  {desc: '15', amount: 15, color: 'olive'},
  {desc: '16', amount: 16, color: 'maroon'},
  {desc: '17', amount: 17, color: 'navy'},
  
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
document.getElementById('pieChart').appendChild(pieChart)
document.getElementById('barChart').appendChild(barChart)
document.getElementById('lineChart').appendChild(lineChart)
