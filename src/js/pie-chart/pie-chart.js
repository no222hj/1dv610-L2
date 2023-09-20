/**
 * Class for creating a pie chart
 * 
 * @author Nathanael Olsson
 * @verison 1.0.0
 */

/**
 * Creates a pie chart svg
 */

export class PieChart {


  constructor(data, options) {
    this.chartData = data
    this.chartOptions = options //use setter in future.
    this.chartWidth = this.chartOptions.size.width
    this.radian = this.chartWidth / 2 * 0.75
  }


  createPieChart() { 
    const data = this.chartData
    console.log(data)
    let currentAngleInRadians = 0
    const pieGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    for (let index = 0; index < data.length; index++) {
      const pieSlice = this.generateSlice(data[index], currentAngleInRadians)
      currentAngleInRadians += this.convertToRadians(data[index].percent * 360)
      pieGroup.appendChild(pieSlice)
    }
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "path")
    // I want a outline circle, not a filled one to outline the chart slices.
    circle.setAttribute("d", `M${this.chartWidth / 2}, ${this.chartWidth / 2} m${-this.radian}, 0 a${this.radian},${this.radian} 0 1,0 ${(this.chartWidth / 2) * 1.5},0 a${this.radian},${this.radian} 0 1,0 ${-(this.chartWidth / 2) * 1.5},0`)
    circle.setAttribute("fill", "none")
    circle.setAttribute("stroke", "black")
    pieGroup.appendChild(circle)
    return pieGroup
  }


  generateSlice(data, startAngleInRadians) {
    const pieSlice = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const startX = this.chartWidth / 2 + Math.cos(startAngleInRadians) * this.radian
    const startY = this.chartWidth / 2 + Math.sin(startAngleInRadians) * this.radian
    const endX = this.chartWidth / 2 + Math.cos(startAngleInRadians + this.convertToRadians(data.percent * 360)) * this.radian
    const endY = this.chartWidth / 2 + Math.sin(startAngleInRadians + this.convertToRadians(data.percent * 360)) * this.radian


    pieSlice.setAttribute("d", `M${this.chartWidth / 2},${this.chartWidth / 2} L${startX},${startY} A${this.radian},${this.radian}, 0 0,1 ${endX},${endY} Z`)
    pieSlice.setAttribute("fill", data.color)

    return pieSlice
  }

  convertToRadians(degrees) {
    return degrees * Math.PI / 180
  }


}