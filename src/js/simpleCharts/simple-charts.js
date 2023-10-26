import { PieChart } from '../pie-chart/pie-chart.js'
import { BarChart } from '../bar-chart/bar-chart.js'
import { LineChart } from '../line-chart/line-chart.js'
import { DoughnutChart } from '../doughnut-chart/doughnut-chart.js'

export class SimpleCharts {

  chartData

  chartOptions

  constructor(chartData, userOptions) {
    this.#setChartData(chartData)
    this.#setOptions(userOptions)
  }

  #setChartData(chartData) {

    if (chartData === undefined) {
      throw new Error("SimpleCharts: no dataset")
    }
    if (!Array.isArray(chartData)) {
      throw new Error("SimpleCharts: dataset formatting error")
    }
    if (Object.keys(chartData).length < 2) {
      throw new Error("SimpleCharts: dataset requires at least two datapoints")
    }

    chartData.forEach(element => {
      if (!/^(?!0$)\d+(\.\d+)?$/.test(element.value)) {
        throw new Error("SimpleCharts: datapoint value required and has to be a positive number")
      }
      if (typeof element.argument !== "string") {
        throw new Error("SimpleCharts: datapoint argument required and has to be a string")
      }
      if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(element.color)) {
        throw new Error("SimpleCharts: datapoint color required and has to be a string in hex color format")
      }
    })
    this.#setPercentage(chartData)
    this.chartData = chartData
  }

  #setOptions(options) {
    if (!options === undefined) {

      if (Object.keys(options).length > 4) {
        throw new Error("simpleCharts option error: too many options")
      }

      if (!(typeof userOptions.size === undefined ||
        (typeof userOptions.size === "object" &&
          (/^[1-9][0-9]*$/.test(userOptions.size.width) &&
            /^[1-9][0-9]*$/.test(userOptions.size.height)) &&
          (typeof userOptions.size.width === 'number' && typeof userOptions.size.height === 'number')))) {
        throw new Error("simpleCharts option error: size has to be an object with width and height as positive numbers")
      }
    }
    const defaultOptions = {
      size: {
        width: 400,
        height: 400
      }
    }

    if (options) {
      Object.assign(defaultOptions, options)
      const userOptions = JSON.parse(JSON.stringify(defaultOptions))

      if (this.chartOptions) {
        Object.assign(this.chartOptions, userOptions)
      } else {
        this.chartOptions = Object.assign(defaultOptions, userOptions)
      }
    } else {
      this.chartOptions = defaultOptions
    }
  }

  #setPercentage(chartData) {
    let total = 0;
    chartData.forEach(element => {
      total += element.value;
    });
    chartData.forEach(element => {
      element.percent = (element.value / total)
    })
  }

  editOptions(userOptions) {
    this.#setOptions(userOptions)
  }

  plotPieChart() {
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

  #createSVG() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", `${this.chartOptions.size.width}`)
    svg.setAttribute("height", `${this.chartOptions.size.height}`)
    return svg
  }
}
