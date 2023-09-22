/**
 * Class for creating a pie chart
 * 
 * @author Nathanael Olsson
 * @verison 1.0.0
 */

/**
 * Creates a pie chart svg
 */

export class DoughnutChart {


    constructor(data, options) {
      this.chartData = data
      this.chartOptions = options //use setter in future.
      this.chartWidth = this.chartOptions.size.width
      this.radian = this.chartWidth / 2 * 0.75
      this.innerRadius = 0.5
    }
  
  
    createDoughnutChart() { 
      const data = this.chartData
      let currentAngleInRadians = 360
      const doughnutGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
      for (let index = 0; index < data.length; index++) {
        const doughnutPart = this.generatePart(data[index], currentAngleInRadians)
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
        title.textContent = `${data[index].desc}: ${data[index].amount}`
        doughnutPart.appendChild(title)
        currentAngleInRadians += this.convertToRadians(data[index].percent * 360)
        doughnutGroup.appendChild(doughnutPart)
      }
      console.log(doughnutGroup)
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "path")
      // I want a outline circle, not a filled one to outline the chart slices.
      circle.setAttribute("d", `M${this.chartWidth / 2}, ${this.chartWidth / 2} m${-this.radian}, 0 a${this.radian},${this.radian} 0 1,0 ${(this.chartWidth / 2) * 1.5},0 a${this.radian},${this.radian} 0 1,0 ${-(this.chartWidth / 2) * 1.5},0`)
      circle.setAttribute("fill", "none")
      circle.setAttribute("stroke", "black")
      doughnutGroup.appendChild(circle)
      return doughnutGroup
    }
  
  
    generatePart(data, startAngleInRadians) {
      const doughnutPart = document.createElementNS("http://www.w3.org/2000/svg", "path")
      const startOuterX = this.chartWidth / 2 + Math.cos(startAngleInRadians) * this.radian
      const startOuterY = this.chartWidth / 2 + Math.sin(startAngleInRadians) * this.radian
      const endOuterX = this.chartWidth / 2 + Math.cos(startAngleInRadians + this.convertToRadians(data.percent * 360)) * this.radian
      const endOuterY = this.chartWidth / 2 + Math.sin(startAngleInRadians + this.convertToRadians(data.percent * 360)) * this.radian
  
      console.log(startOuterX)

      const startInnerX = this.chartWidth / 2 + Math.cos(startAngleInRadians) * this.radian * this.innerRadius
      const startInnerY = this.chartWidth / 2 + Math.sin(startAngleInRadians) * this.radian * this.innerRadius
      const endInnerX = this.chartWidth / 2 + Math.cos(startAngleInRadians + this.convertToRadians(data.percent * 360)) * this.radian * this.innerRadius
      const endInnerY = this.chartWidth / 2 + Math.sin(startAngleInRadians + this.convertToRadians(data.percent * 360)) * this.radian * this.innerRadius    
  
      const d = `M${startInnerX},${startInnerY}` + 
                `L${startOuterX},${startOuterY}` + 
                `A${this.radian},${this.radian}, 0 0,1 ${endOuterX},${endOuterY}` +
                `L${endInnerX},${endInnerY}` +
                `A${this.radian * this.innerRadius},${this.radian * this.innerRadius}, 0 0,0 ${startInnerX},${startInnerY} Z}`

      doughnutPart.setAttribute("d", `${d}`)
      doughnutPart.setAttribute("fill", data.color)
        doughnutPart.setAttribute("stroke", "white")
  
      return doughnutPart
    }
  
    convertToRadians(degrees) {
      return degrees * Math.PI / 180
    }
  
  
  }