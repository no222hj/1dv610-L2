/**
 * Chart module class
 * 
 * @author Nathanael Olsson
 * @version 1.0.0
 */

import { PieChart } from '../pie-chart/pie-chart.js'
import { BarChart } from '../bar-chart/bar-chart.js'
import { LineChart } from '../line-chart/line-chart.js'

/**
 * Creates a chart module
 */
export class ChartModule {

chartData

chartOptions

#totalAmount;

constructor (chartData, options) {
  this.chartData = chartData
  this.chartOptions = this.setOptions(options)
  this.#totalAmount = this.setTotalAmount()
}

/**
 * Sets the total amount of all elements in the chart data
 */
setTotalAmount() {
  let total = 0;
  this.chartData.forEach(element => {
    total += element.amount;
  });
  return total;
}

/**
 * Sets the percentage of each element in the chart data
 */
setPercentage() {
  this.chartData.forEach(element => {
    element.percent = (element.amount / this.#totalAmount)
  })
}

getTotalAmount() {
  return this.#totalAmount;
}

getData() {

}

// Create a svg element after given parameters, or default values, and return it.
createSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("width", `${this.chartOptions.size.width}`)
  svg.setAttribute("height", `${this.chartOptions.size.height}`)
  return svg
}

setOptions(userOptions) {
  const defaultOptions = {
    size: {
      width: 400,
      height: 400
    }
  }

  return Object.assign(JSON.parse(JSON.stringify(defaultOptions)), JSON.parse(JSON.stringify(userOptions)))
}

plotPieChart() {
  this.setPercentage()
  const svg = this.createSVG()
  const pieChart = new PieChart(this.chartData, this.chartOptions)
  svg.appendChild(pieChart.createPieChart())
  return svg
}

plotBarChart() {
  const svg = this.createSVG()
  const barChart = new BarChart(this.chartData, this.chartOptions)
  svg.appendChild(barChart.createBarChart())
  return svg
}

plotLineChart() {
  const svg = this.createSVG()
  const lineChart = new LineChart(this.chartData, this.chartOptions)
  svg.appendChild(lineChart.createLineChart())
  return svg
}
}
