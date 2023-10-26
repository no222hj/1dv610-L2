
export class BarChart {

  chartData

  chartOptions

  constructor(data, options) {
    this.chartData = data
    this.chartOptions = this.#setChartOptions(options)
  }

  createBarChart() {

    const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const bars = document.createElementNS("http://www.w3.org/2000/svg", "g")
    chartGroup.appendChild(bars)

    this.barsTotalWidth = this.chartOptions.size.width - this.chartOptions.marginLeft - this.chartOptions.marginRight
    this.barsTotalHeight = this.chartOptions.size.height - this.chartOptions.marginTop - this.chartOptions.marginBottom

    this.barWidth = (this.barsTotalWidth - this.chartOptions.marginLeft) / this.chartData.length - this.chartOptions.barSpace

    chartGroup.appendChild(this.#generateAxisX())
    chartGroup.appendChild(this.#generateAxisY())
    this.chartData.forEach((element, i) => {
      const bar = this.#generateBar(element, i)
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
      title.textContent = `${element.argument}: ${element.value}`
      bar.appendChild(title)
      bars.appendChild(bar)
    });

    this.#getMaxValue()
    return chartGroup
  }

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
    const options = JSON.parse(JSON.stringify(userOptions))
    const yAxisOptions = {
      ticks: 5,
      maxValue: this.#getMaxValue()
    }
    options.yAxis = Object.assign(JSON.parse(JSON.stringify(yAxisOptions)), JSON.parse(JSON.stringify(userOptions.yAxis || {})))
    options.barSpace = 0.01 * userOptions.size.width
    options.marginLeft = 0.02 * userOptions.size.width
    options.marginRight = 0.02 * userOptions.size.width
    options.marginTop = 0.02 * userOptions.size.height
    options.marginBottom = 0.02 * userOptions.size.height

    return options
  }

  #generateAxisX() {
    const margin = this.chartOptions.marginLeft
    const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
    axis.appendChild(axisLine)
    axisLine.setAttribute("x1", 0 + margin)
    axisLine.setAttribute("y1", this.chartOptions.size.height - this.chartOptions.marginBottom)
    axisLine.setAttribute("x2", this.barsTotalWidth)
    axisLine.setAttribute("y2", this.chartOptions.size.height - this.chartOptions.marginBottom)
    axisLine.setAttribute("stroke", "black")

    const tickSpace = this.barWidth + this.chartOptions.barSpace
    for (let i = 0; i < this.chartData.length; i++) {
      const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
      tick.setAttribute("x1", i * tickSpace + margin + tickSpace / 2 + this.chartOptions.barSpace)
      tick.setAttribute("y1", this.chartOptions.size.height)
      tick.setAttribute("x2", i * tickSpace + margin + tickSpace / 2 + this.chartOptions.barSpace)
      tick.setAttribute("y2", this.chartOptions.size.height - this.chartOptions.marginBottom)
      tick.setAttribute("stroke", "black")
      axis.appendChild(tick)
    }
    return axis
  }

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

  #getMaxValue() {
    let max = 0
    this.chartData.forEach(element => {
      if (element.value > max) {
        max = element.value
      }
    })
    return max
  }

  #generateBar(data, indexOfBar) {

    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    const barHeight = data.value / this.chartOptions.yAxis.maxValue * this.barsTotalHeight

    bar.setAttribute("y", `${this.chartOptions.size.height - barHeight - this.chartOptions.marginBottom}`)
    bar.setAttribute("x", `${this.chartOptions.barSpace + (this.barWidth + this.chartOptions.barSpace) * indexOfBar + this.chartOptions.marginLeft}`)
    bar.setAttribute("width", `${this.barWidth}`)
    bar.setAttribute("height", `${barHeight}`)
    bar.setAttribute("fill", `${data.color}`)
    bar.setAttribute("stroke", "black")
    return bar
  }
}