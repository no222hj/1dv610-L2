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

      this.barsWidth = this.chartOptions.size.width - (this.chartOptions.size.width * 0.02)

      chartGroup.appendChild(this.generateAxisX())
      chartGroup.appendChild(this.generateAxisY())
      this.chartData.forEach((element, i) => {
        const bar = this.generateBar(element)
        bar.setAttribute("x", `${i / 100 * this.barsWidth / this.chartData.length * 100}`)
        chartGroup.appendChild(bar)
      });

      this.getMaxValueX()
      console.log(this.getMaxValueX())
      return chartGroup
    }

    setBarChartOptions(userOptions) {
      const defaultOptions = {
        maxValue: this.getMaxValueX(),
        ticks: 5
        }

        return Object.assign(JSON.parse(JSON.stringify(defaultOptions)), JSON.parse(JSON.stringify(userOptions || {})))
      }
    
    generateAxisX() {
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axis.setAttribute("x1", 0)
      axis.setAttribute("y1", this.chartOptions.size.height)
      axis.setAttribute("x2", this.barsWidth )
      axis.setAttribute("y2", this.chartOptions.size.height)
      axis.setAttribute("stroke", "black")

      return axis
    }

    generateAxisY() {
      const margin = (this.chartOptions.size.width * 0.02)
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

    generateTick() {
      const tick = document.createElementNS("http://www.w3.org/2000/svg", "line")
      tick.setAttribute("x1", 0)
      tick.setAttribute("y1", 0)
      tick.setAttribute("x2", 0)
      tick.setAttribute("y2", 0)
      tick.setAttribute("stroke", "black")
      
      return tick
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
        


  
    generateBar(data) {

      const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      const barHeight = data.amount / this.getMaxValueX() * this.chartOptions.size.height
      const barWidth = this.barsWidth / this.chartData.length
      bar.setAttribute("y", `${this.chartOptions.size.height - barHeight}`)
      bar.setAttribute("width", `${barWidth}`)
      bar.setAttribute("height", `${barHeight}`)
      bar.setAttribute("fill", `${data.color}`)
      bar.setAttribute("stroke", "black")

      return bar
    }
    
  }