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

    constructor(data, options) {
      this.chartData = data
      this.chartOptions = options
    }

    createChart() { 
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
      svg.setAttribute("width", "200")
      svg.setAttribute("height", "200")

      chartGroup.appendChild(this.generateAxisX(200, 200))
      chartGroup.appendChild(this.generateAxisY(200, 200))
      chartGroup.appendChild(this.generateBar(this.chartData[0], 200, 200))

      svg.appendChild(chartGroup)

      this.getMaxValueX()
      console.log(this.getMaxValueX())
      return svg
    }

    generateAxisX(height, width) {
    
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axis.setAttribute("x1", 0)
      axis.setAttribute("y1", height)
      axis.setAttribute("x2", width)
      axis.setAttribute("y2", height)
      axis.setAttribute("stroke", "black")

      return axis
    }

    generateAxisY(height, width) {
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axis.setAttribute("x1", 0)
      axis.setAttribute("y1", 0)
      axis.setAttribute("x2", 0)
      axis.setAttribute("y2", height)
      axis.setAttribute("stroke", "black")

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
        


  
    generateBar(data, height, width) {

      const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      console.log(height)
      const barHeight = data.amount / this.getMaxValueX() * height
      console.log(barHeight)
      const barWidth = width / this.chartData.length
      console.log(barWidth)
      bar.setAttribute("x", "0")
      bar.setAttribute("y", `${barHeight}`)
      bar.setAttribute("width", `${barWidth}`)
      bar.setAttribute("height", `${barHeight}`)
      bar.setAttribute("fill", `${data.color}`)


      return bar
    }
    
  }