/**
 * Chart module class
 * 
 * @author Nathanael Olsson
 * @version 1.0.0
 */

import { PieChart } from '../pie-chart/pie-chart.js'

/**
 * Creates a chart module
 */
export class ChartModule {

#totalAmount;

constructor (chartData) {
  this.chartData = chartData
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

plotPieChart() {
  this.setPercentage()
  this.pieChart = new PieChart(this.chartData)
  console.log(this.chartData)
  return this.pieChart.createChart()
}
}
