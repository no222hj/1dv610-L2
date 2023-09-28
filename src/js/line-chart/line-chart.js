/**
 * Class for creating a bar chart
 * 
 * @author Nathanael Olsson
 * @verison 1.0.0
 */

/**
 * Creates a bar chart svg
 */

export class LineChart {

  chartData

  chartOptions

  chartOptions

  constructor(data, options) {
    this.chartData = data
    this.chartOptions = options
    this.chartOptions = this.#setChartOptions(options)
  }

  /**
   * Creates a bar chart svg
   * 
   * @returns {object} an svg element <g> with a bar chart.
   */

  createLineChart() {

    const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const lineField = document.createElementNS("http://www.w3.org/2000/svg", "g")
    chartGroup.appendChild(lineField)

    this.lineTotalWidth = this.chartOptions.size.width - this.chartOptions.marginLeft - this.chartOptions.marginRight
    this.lineTotalHeight = this.chartOptions.size.height - this.chartOptions.marginTop - this.chartOptions.marginBottom

    chartGroup.appendChild(this.#generateAxisX())
    chartGroup.appendChild(this.#generateAxisY())

    const line = document.createElementNS("http://www.w3.org/2000/svg", "path")
    line.setAttribute("fill", "none")

    const xGap = this.lineTotalWidth / (this.chartData.length - 1)
    console.log(xGap)
    console.log(this.lineTotalWidth)
    let currentX = this.lineTotalWidth
    let currentY = this.lineTotalHeight
    let path = ""
    this.chartData.forEach((element, i) => {
      currentX = xGap * i
      currentY = this.lineTotalHeight + this.chartOptions.marginTop - (element.value / this.chartOptions.yAxis.maxValue * this.lineTotalHeight)
      if (i === 0) {
        path = `M${currentX} ${currentY}`
      } else {
        path += ` L${currentX} ${currentY}`
      }


    })
    line.setAttribute("d", path)
    line.setAttribute("stroke", "black")
    chartGroup.appendChild(line)
    return chartGroup
  }

  /**
   * Sets the default options for the bar chart.
   * 
   * @param {object} userOptions 
   * @returns {object} an object with the default options where the user options are omitted.
   */
  #setChartOptions(userOptions) {
    if (userOptions.yAxis) {
      if (typeof userOptions.yAxis !== 'object') {
        throw new Error("simpleCharts option error: yAxis has to be an object")
      }

      if ((userOptions.yAxis.ticks) && (!(/^[1-9][0-9]*$/.test(userOptions.yAxis.ticks) && (typeof userOptions.yAxis?.ticks === 'number')))) {
        throw new Error("simpleCharts option error: yAxis ticks has to be a positive number")
      }

      if ((userOptions.yAxis.maxValue) && ((!(/^[1-9][0-9]*$/.test(userOptions.yAxis.maxValue) && (typeof userOptions.yAxis?.maxValue === 'number'))) || (userOptions.yAxis.maxValue < this.#getMaxValue()))) {
        throw new Error("simpleCharts option error: yAxis maxValue has to be a positive number larger than hightest value in chart data")
      }
    }

    if (userOptions.xAxis) {
      if (typeof userOptions.xAxis !== 'object') {
        throw new Error("simpleCharts option error: xAxis has to be an object")
      }

      if ((userOptions.xAxis.tickValues) && (!Array.isArray(userOptions.xAxis.tickValues))) {
        throw new Error("simpleCharts option error: xAxis tickValues has to be an array")
      }

      if (userOptions.xAxis.tickValues?.length > 50) {
        throw new Error("simpleCharts option error: xAxis tickValues has to be an array of strings not longer than 50 elements")
      }

      userOptions.xAxis.tickValues?.forEach(element => {
        if (typeof element !== 'string') {
          throw new Error("simpleCharts option error: xAxis tickValues has to be an array of strings not longer than 50 elements")
        }
      })
    }

    const options = JSON.parse(JSON.stringify(userOptions))
    const yAxisOptions = {
      ticks: 5,
      maxValue: this.#getMaxValue()
    }
    const xAxisOptions = {
      tickValues: []
    }
    options.yAxis = Object.assign(JSON.parse(JSON.stringify(yAxisOptions)), JSON.parse(JSON.stringify(userOptions.yAxis || {})))
    options.xAxis = Object.assign(JSON.parse(JSON.stringify(xAxisOptions)), JSON.parse(JSON.stringify(userOptions.xAxis || {})))
    options.xAxis.ticks = options.xAxis.tickValues.length
    options.barSpace = 0.01 * this.chartOptions.size.width
    options.marginLeft = 0.02 * this.chartOptions.size.width
    options.marginRight = 0.02 * this.chartOptions.size.width
    options.marginTop = 0.02 * this.chartOptions.size.height
    options.marginBottom = 0.02 * this.chartOptions.size.height
    return options
  }

  /**
   * Generates a x-axis for the bar chart.
   * 
   * @returns {object} svg element representing the axis.
   */
  #generateAxisX() {
    const margin = this.chartOptions.marginLeft
    const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
    axis.appendChild(axisLine)
    axisLine.setAttribute("x1", 0 + margin)
    axisLine.setAttribute("y1", this.chartOptions.size.height - this.chartOptions.marginBottom)
    axisLine.setAttribute("x2", this.lineTotalWidth)
    axisLine.setAttribute("y2", this.chartOptions.size.height - this.chartOptions.marginBottom)
    axisLine.setAttribute("stroke", "black")

    if (this.chartOptions.xAxis.ticks > 0) {
      const tickSpace = (this.chartOptions.size.width - (this.chartOptions.marginLeft + this.chartOptions.marginRight)) / this.chartOptions.xAxis.ticks
      for (let i = 0; i < this.chartOptions.xAxis.ticks; i++) {
        const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
        tick.setAttribute("x1", i * tickSpace + margin + (tickSpace - margin))
        tick.setAttribute("y1", this.chartOptions.size.height)
        tick.setAttribute("x2", i * tickSpace + margin + (tickSpace - margin))
        tick.setAttribute("y2", this.chartOptions.size.height - this.chartOptions.marginBottom)
        tick.setAttribute("stroke", "black")
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
        title.textContent = `${this.chartOptions.xAxis.tickValues[i]}`
        tick.appendChild(title)
        axis.appendChild(tick)
        axis.appendChild(tick)
      }
    }

    return axis
  }

  /**
   * Generates a y-axis for the bar chart.
   * 
   * @returns {object} svg element representing the axis.
   */
  #generateAxisY() {
    const margin = this.chartOptions.marginLeft
    const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
    axisLine.setAttribute("x1", 0 + margin)
    axisLine.setAttribute("y1", 0 + this.chartOptions.marginTop)
    axisLine.setAttribute("x2", 0 + margin)
    axisLine.setAttribute("y2", this.chartOptions.size.height - this.chartOptions.marginBottom)
    axisLine.setAttribute("stroke", "black")
    axis.appendChild(axisLine)

    const tickSpace = (this.chartOptions.size.height - (this.chartOptions.marginBottom + this.chartOptions.marginTop)) / this.chartOptions.yAxis.ticks
    for (let i = 0; i < this.chartOptions.yAxis.ticks; i++) {
      const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
      tick.setAttribute("x1", 0)
      tick.setAttribute("y1", tickSpace * i + this.chartOptions.marginTop)
      tick.setAttribute("x2", 0 + margin)
      tick.setAttribute("y2", tickSpace * i + this.chartOptions.marginTop)
      tick.setAttribute("stroke", "black")
      tick.setAttribute("stroke-width", "2")
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
      title.textContent = `${parseFloat((this.chartOptions.yAxis.maxValue / this.chartOptions.yAxis.ticks * (this.chartOptions.yAxis.ticks - i)).toFixed(2))}`
      tick.appendChild(title)
      axis.appendChild(tick)
    }
    return axis
  }

  /**
   * Gets the maximum value of the data.
   * 
   * @returns {number} the maximum value of the data.
   * 
   */
  #getMaxValue() {
    let max = 0
    this.chartData.forEach(element => {
      if (element.value > max) {
        max = element.value
      }
    })
    return max
  }
}