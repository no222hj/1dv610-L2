/**
 * Chart module class
 * 
 * @author Nathanael Olsson
 * @version 1.0.0
 */

import { PieChart } from '../pie-chart/pie-chart.js'
import { BarChart } from '../bar-chart/bar-chart.js'
import { LineChart } from '../line-chart/line-chart.js'
import { DoughnutChart } from '../doughnut-chart/doughnut-chart.js'

/**
 * Creates a chart module
 */
export class SimpleCharts {

  chartData

  chartOptions

  constructor(chartData, userOptions) {
    this.#setChartData(chartData)
    this.#setOptions(userOptions)
  }

  #setChartData(chartData) {
    chartData.forEach(element => {
      // i want to make sure that the value is a positive number and not anything else
      if (!/^(?!0$)\d+(\.\d+)?$/.test(element.value)) {
        throw new Error("value has to be a positive number")
      }
      if (typeof element.argument !== "string") {
        throw new Error("Description has to be a string")
      }
      if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(element.color)) {
        throw new Error("Color has to be a hex color")
      }
    })
    this.chartData = chartData
  }

  #setOptions(userOptions) {

    if (!(userOptions.size === undefined || (typeof userOptions.size === "object" && (/^[1-9][0-9]*$/.test(userOptions.size.width) && /^[1-9][0-9]*$/.test(userOptions.size.height))))) {
      throw new Error("Option error: size has to be an object with width and height as positive numbers")
    }
      
    const defaultOptions = {
      size: {
        width: 400,
        height: 400
      }
    }

    this.chartOptions = Object.assign(JSON.parse(JSON.stringify(defaultOptions)), JSON.parse(JSON.stringify(userOptions)))
  }

    /**
     * Sets the percentage of each element in the chart data
     */
    #setPercentage() {
      let total = 0;
      this.chartData.forEach(element => {
        total += element.value;
      });
      this.chartData.forEach(element => {
        element.percent = (element.value / total)
      })
    }

  #createSVG() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", `${this.chartOptions.size.width}`)
    svg.setAttribute("height", `${this.chartOptions.size.height}`)
    return svg
  }

  plotPieChart() {
    this.#setPercentage()
    const svg = this.#createSVG()
    const pieChart = new PieChart(this.chartData, this.chartOptions)
    svg.appendChild(pieChart.createPieChart())
    return svg
  }

  plotBarChart() {
    const svg = this.#createSVG()
    const barChart = new BarChart(this.chartData, this.chartOptions)
    svg.appendChild(barChart.createBarChart())
    return svg
  }

  plotLineChart() {
    const svg = this.#createSVG()
    const lineChart = new LineChart(this.chartData, this.chartOptions)
    svg.appendChild(lineChart.createLineChart())
    return svg
  }

  plotDoughnutChart() {
    const svg = this.#createSVG()
    const doughnutChart = new DoughnutChart(this.chartData, this.chartOptions)
    svg.appendChild(doughnutChart.createDoughnutChart())
    return svg
  }
}
