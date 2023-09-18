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


    constructor(data) {
      this.chartData = data
    }

    createChart() { 
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g")
      svg.setAttribute("width", "200")
      svg.setAttribute("height", "200")

      group.appendChild(this.generateAxisX(200, 200))
      group.appendChild(this.generateAxisY(200, 200))
      group.appendChild(this.generateBar(this.chartData[0], 200, 200))

      svg.appendChild(group)

      return svg
    }

    generateAxisX(height, width) {
    
      const axis = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axis.setAttribute("x1", 1)
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
  
    generateBar(data, height, width) {

      const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      bar.setAttribute("x", "0")
      bar.setAttribute("y", "150")
      bar.setAttribute("width", "20")
      bar.setAttribute("height", "50")
      bar.setAttribute("fill", "red")


      return bar
    }
    
  }