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
      this.barsTotalHeight = this.chartOptions.size.height - this.barChartOptions.marginTop - this.barChartOptions.marginBottom

      this.barsTotalWidth = this.chartOptions.size.width - this.barChartOptions.marginLeft - this.barChartOptions.marginRight
      this.barsTotalHeight = this.chartOptions.size.height - this.barChartOptions.marginTop - this.barChartOptions.marginBottom

      chartGroup.appendChild(this.generateAxisX())
      chartGroup.appendChild(this.generateAxisY())
      this.chartData.forEach((element, i) => {
        const bar = this.generateBar(element, i)
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
        title.textContent = `${element.desc}: ${element.amount}`
        bar.appendChild(title)
        bars.appendChild(bar)
      });

      this.getMaxValue()
      return chartGroup
    }

    setBarChartOptions(userOptions) {
      const defaultOptions = {
        maxValueX: this.getMaxValue(),
        maxValueY: this.getMaxValue(),
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
        const margin = this.barChartOptions.marginLeft
          const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
          const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
          axis.appendChild(axisLine)
          axisLine.setAttribute("x1", 0 + margin)
          axisLine.setAttribute("y1", this.chartOptions.size.height - this.barChartOptions.marginBottom)
          axisLine.setAttribute("x2", this.barsTotalWidth )
          axisLine.setAttribute("y2", this.chartOptions.size.height - this.barChartOptions.marginBottom)
          axisLine.setAttribute("stroke", "black")
    
          const tickSpace = (this.chartOptions.size.width - (this.barChartOptions.marginLeft + this.barChartOptions.marginRight)) / this.barChartOptions.ticks
          for (let i = 0; i < this.barChartOptions.ticks; i++) {
            const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
            tick.setAttribute("x1", i * tickSpace + margin + (tickSpace - margin))
            tick.setAttribute("y1", this.chartOptions.size.height)
            tick.setAttribute("x2", i * tickSpace + margin + (tickSpace - margin))
            tick.setAttribute("y2", this.chartOptions.size.height - this.barChartOptions.marginBottom)
            tick.setAttribute("stroke", "black")
            axis.appendChild(tick)
          }
          return axis
        }
    
        generateAxisY() {
          const margin = this.barChartOptions.marginLeft
          const axis = document.createElementNS("http://www.w3.org/2000/svg", "g")
          const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
          axisLine.setAttribute("x1", 0 + margin)
          axisLine.setAttribute("y1", 0 + this.barChartOptions.marginTop)
          axisLine.setAttribute("x2", 0 + margin)
          axisLine.setAttribute("y2", this.chartOptions.size.height - this.barChartOptions.marginBottom)
          axisLine.setAttribute("stroke", "black")
          axis.appendChild(axisLine)
    
          const tickSpace = (this.chartOptions.size.height - (this.barChartOptions.marginBottom + this.barChartOptions.marginTop)) / this.barChartOptions.ticks
          for (let i = 0; i < this.barChartOptions.ticks; i++) {
            const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
            tick.setAttribute("x1", 0)
            tick.setAttribute("y1", tickSpace * i + this.barChartOptions.marginTop)
            tick.setAttribute("x2", 0 + margin)
            tick.setAttribute("y2", tickSpace * i + this.barChartOptions.marginTop)
            tick.setAttribute("stroke", "black")
            axis.appendChild(tick)
          }
          return axis
        }

    // function for deciding x axis top value, if no argument is given, the function will use the highest value in the chart data
    //Redo this later with options
    getMaxValue() {
      let max = 0
      this.chartData.forEach(element => {
        if (element.amount > max) {
          max = element.amount
        }
      })
      return max
  }
        


  
    generateBar(data, indexOfBar) {

      const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      // I want the bars to start with a margin from the left side of the chart, and a margin from the bottom of the chart.
      const barHeight = data.amount / this.getMaxValue() * this.barsTotalHeight
      const barWidth = (this.barsTotalWidth - this.barChartOptions.marginLeft) / this.chartData.length - this.barChartOptions.barSpace
      bar.setAttribute("y", `${this.chartOptions.size.height - barHeight - this.barChartOptions.marginBottom}`)
      bar.setAttribute("x", `${this.barChartOptions.barSpace + (barWidth + this.barChartOptions.barSpace) * indexOfBar + this.barChartOptions.marginLeft}`)
      bar.setAttribute("width", `${barWidth}`)
      bar.setAttribute("height", `${barHeight}`)
      bar.setAttribute("fill", `${data.color}`)
      bar.setAttribute("stroke", "black")

      return bar
    }
  }