/**
 * Class for creating a bar chart
 * 
 * @author Nathanael Olsson
 * @verison 1.0.0
 */

/**
 * Creates a bar chart svg
 */

export class BarChart {

    chartData

    chartOptions

    barChartOptions

    constructor(data, options) {
      this.chartData = data
      this.chartOptions = options
      this.barChartOptions = this.setBarChartOptions(options.type)
    }

    createBarChart() { 

      const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
      const bars = document.createElementNS("http://www.w3.org/2000/svg", "g")
      chartGroup.appendChild(bars)

      this.barsTotalWidth = this.chartOptions.size.width - this.barChartOptions.marginLeft - this.barChartOptions.marginRight

      chartGroup.appendChild(this.generateAxisX())
      chartGroup.appendChild(this.generateAxisY())
      this.chartData.forEach((element, i) => {
        const bar = this.generateBar(element, i)
        bars.appendChild(bar)
      });

      this.getMaxValueX()
      return chartGroup
    }

    setBarChartOptions(userOptions) {
      const defaultOptions = {
        maxValue: this.getMaxValueX(),
        ticks: 5,
        barSpace: 0.01 * this.chartOptions.size.width,
        marginLeft: 0.02 * this.chartOptions.size.width,
        marginRight: 0.02 * this.chartOptions.size.width,
        marginTop: 0.02 * this.chartOptions.size.height,
        marginBottom: 0.02 * this.chartOptions.size.height
        }

        return Object.assign(JSON.parse(JSON.stringify(defaultOptions)), JSON.parse(JSON.stringify(userOptions || {})))
      }
    
    generateAxisX() {
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
      const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axis.appendChild(axisLine)
      axisLine.setAttribute("x1", 0)
      axisLine.setAttribute("y1", this.chartOptions.size.height)
      axisLine.setAttribute("x2", this.barsTotalWidth )
      axisLine.setAttribute("y2", this.chartOptions.size.height)
      axisLine.setAttribute("stroke", "black")

      return axis
    }

    generateAxisY() {
      const margin = this.barChartOptions.marginLeft
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
      const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axisLine.setAttribute("x1", 0 + margin)
      axisLine.setAttribute("y1", 0)
      axisLine.setAttribute("x2", 0 + margin)
      axisLine.setAttribute("y2", this.chartOptions.size.height)
      axisLine.setAttribute("stroke", "black")
      axis.appendChild(axisLine)

      const tickSpace = this.chartOptions.size.height / this.barChartOptions.ticks
      for (let i = 0; i < this.barChartOptions.ticks; i++) {
        const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
        tick.setAttribute("x1", 0)
        tick.setAttribute("y1", tickSpace * i)
        tick.setAttribute("x2", 0 + margin)
        tick.setAttribute("y2", tickSpace * i)
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
        


  
    generateBar(data, indexOfBar) {

      const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      const barHeight = data.amount / this.getMaxValueX() * this.chartOptions.size.height
      const barWidth = this.barsTotalWidth / this.chartData.length - this.barChartOptions.barSpace
      bar.setAttribute("y", `${this.chartOptions.size.height - barHeight}`)
      bar.setAttribute("x", `${this.barChartOptions.barSpace * 2 + (barWidth + this.barChartOptions.barSpace) * indexOfBar}`)
      bar.setAttribute("width", `${barWidth}`)
      bar.setAttribute("height", `${barHeight}`)
      bar.setAttribute("fill", `${data.color}`)
      bar.setAttribute("stroke", "black")

      return bar
    }
    
  }