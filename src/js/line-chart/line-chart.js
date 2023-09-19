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

    barChartOptions

    constructor(data, options) {
      this.chartData = data
      this.chartOptions = options
      this.lineChartOptions = this.setLineChartOptions(options.type)
    }

    createLineChart() { 

      const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
      const lineField = document.createElementNS("http://www.w3.org/2000/svg", "g")
      chartGroup.appendChild(lineField)

      this.lineTotalWidth = this.chartOptions.size.width - this.lineChartOptions.marginLeft - this.lineChartOptions.marginRight

      chartGroup.appendChild(this.generateAxisX())
      chartGroup.appendChild(this.generateAxisY())

      const line = document.createElementNS("http://www.w3.org/2000/svg", "path")
      let currentX = this.lineChartOptions.marginLeft
      let currentY = 0
      let path = ""
      this.chartData.forEach((element, i) => {
        currentX = element.amountX + this.lineChartOptions.marginLeft
        currentY = element.amountY
        if (i === 0) {
            path = `M${currentX},${currentY}`
        } else {
            path += ` L${currentX},${currentY}`
        }
        line.setAttribute("d", path)
        line.setAttribute("stroke", "black")

      })

      this.getMaxValueX()
      return chartGroup
    }

    setLineChartOptions(userOptions) {
      const defaultOptions = {
        maxValue: this.getMaxValueX(),
        ticks: 5,
        barSpace: 0.01 * this.chartOptions.size.width,
        marginLeft: 0.02 * this.chartOptions.size.width,
        marginRight: 0.02 * this.chartOptions.size.width,
        marginTop: 0.02 * this.chartOptions.size.height,
        marginBottom: 0.02 * this.chartOptions.size.height,
        }

        return Object.assign(JSON.parse(JSON.stringify(defaultOptions)), JSON.parse(JSON.stringify(userOptions || {})))
      }
    
    generateAxisX() {
    const margin = this.lineChartOptions.marginLeft
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
      const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axis.appendChild(axisLine)
      axisLine.setAttribute("x1", 0 + margin)
      axisLine.setAttribute("y1", this.chartOptions.size.height - this.lineChartOptions.marginBottom)
      axisLine.setAttribute("x2", this.lineTotalWidth )
      axisLine.setAttribute("y2", this.chartOptions.size.height - this.lineChartOptions.marginBottom)
      axisLine.setAttribute("stroke", "black")

      const tickSpace = (this.chartOptions.size.width - (this.lineChartOptions.marginLeft + this.lineChartOptions.marginRight)) / this.lineChartOptions.ticks
      console.log(this.lineChartOptions.marginLeft)
      for (let i = 0; i < this.lineChartOptions.ticks; i++) {
        const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
        tick.setAttribute("x1", i * tickSpace + margin + (tickSpace - margin))
        console.log(i * tickSpace + margin)
        tick.setAttribute("y1", this.chartOptions.size.height)
        tick.setAttribute("x2", i * tickSpace + margin + (tickSpace - margin))
        console.log(i * tickSpace + margin)
        tick.setAttribute("y2", this.chartOptions.size.height - this.lineChartOptions.marginBottom)
        tick.setAttribute("stroke", "black")
        axis.appendChild(tick)
      }
      return axis
    }

    generateAxisY() {
      const margin = this.lineChartOptions.marginLeft
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
      const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axisLine.setAttribute("x1", 0 + margin)
      axisLine.setAttribute("y1", 0 + this.lineChartOptions.marginTop)
      axisLine.setAttribute("x2", 0 + margin)
      axisLine.setAttribute("y2", this.chartOptions.size.height - this.lineChartOptions.marginBottom)
      axisLine.setAttribute("stroke", "black")
      axis.appendChild(axisLine)

      const tickSpace = (this.chartOptions.size.height - (this.lineChartOptions.marginBottom + this.lineChartOptions.marginTop)) / this.lineChartOptions.ticks
      for (let i = 0; i < this.lineChartOptions.ticks; i++) {
        const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
        tick.setAttribute("x1", 0)
        tick.setAttribute("y1", tickSpace * i + this.lineChartOptions.marginTop)
        tick.setAttribute("x2", 0 + margin)
        tick.setAttribute("y2", tickSpace * i + this.lineChartOptions.marginTop)
        tick.setAttribute("stroke", "black")
        axis.appendChild(tick)
      }
      return axis
    }

    // function for deciding x axis top value, if no argument is given, the function will use the highest value in the chart data
    //Redo this later with options
    getMaxValueX(maxValue) {
      if (maxValue) {
        return maxValue
      } else {
        let max = 0
        this.chartData.forEach(element => {
          if (element.amount > max) {
            max = element.amount
          }
        })
        return max
      }
    }
    
  }