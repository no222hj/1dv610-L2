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


  constructor(data) {
    this.chartData = data
  }

  createChart() { 
    const data = this.chartData
    console.log(data)
    let currentAngleInRadians = 0
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "200")
    svg.setAttribute("height", "200")
    for (let index = 0; index < data.length; index++) {
      const pieSlice = this.generateSlice(data[index], currentAngleInRadians)
      currentAngleInRadians += this.convertToRadians(data[index].percent * 360)
      svg.appendChild(pieSlice)
    }
    return svg
  }

  generateSlice(data, startAngleInRadians) {
    const pieSlice = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const startX = 100 + Math.cos(startAngleInRadians) * 75
    const startY = 100 + Math.sin(startAngleInRadians) * 75
    const endX = 100 + Math.cos(startAngleInRadians + this.convertToRadians(data.percent * 360)) * 75
    const endY = 100 + Math.sin(startAngleInRadians + this.convertToRadians(data.percent * 360)) * 75


    pieSlice.setAttribute("d", `M100,100 L${startX},${startY} A75,75 0 0,1 ${endX},${endY} Z`)
    pieSlice.setAttribute("fill", data.color)

    return pieSlice
  }

  convertToRadians(degrees) {
    return degrees * Math.PI / 180
  }


}