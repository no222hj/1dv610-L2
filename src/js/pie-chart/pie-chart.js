import { Effects } from "../effects/effects.js"

/**
 * Class for creating a pie chart
 * 
 * @author Nathanael Olsson
 * @verison 1.0.0
 */

export class PieChart {

  constructor(data, options) {
    this.chartData = data
    this.chartOptions = options //use setter in future.
    this.chartWidth = this.chartOptions.size.width
    this.pieWidth = this.chartWidth * 0.75
    this.radian = this.pieWidth / 2
  }

  /**
   * Creates a pie chart
   * 
   * @returns {object} pieGroup
   * 
   * @memberof PieChart
   */
  createPieChart() { 
    const data = this.chartData
    let currentAngleInRadians = this.#convertToRadians(270)
    console.log(currentAngleInRadians)
    const pieGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    for (let index = 0; index < data.length; index++) {
      const pieSlice = this.#generateSlice(data[index], currentAngleInRadians)
      pieSlice.setAttribute("stroke", "white")
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
      title.textContent = `${data[index].desc}: ${data[index].amount} \n ${data[index].percent * 100}%`
      pieSlice.appendChild(title)
      currentAngleInRadians += this.#convertToRadians(data[index].percent * 360)
      const effects = new Effects()
      effects.addTooltip(pieSlice)
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


  /**
   * Generates a pie slice
   * 
   * @param {object} data - The data for the pie slice.
   * @param {number} startAngleInRadians - The start angle of the pie slice in radians.
   * @returns {object} pieSlice
   * 
   * @memberof PieChart
   * @private
   */
  #generateSlice(data, startAngleInRadians) {
    const pieSlice = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const startX = this.chartWidth / 2 + Math.cos(startAngleInRadians) * this.radian
    const startY = this.chartWidth / 2 + Math.sin(startAngleInRadians) * this.radian
    const endX = this.chartWidth / 2 + Math.cos(startAngleInRadians + this.#convertToRadians(data.percent * 360)) * this.radian
    const endY = this.chartWidth / 2 + Math.sin(startAngleInRadians + this.#convertToRadians(data.percent * 360)) * this.radian


    pieSlice.setAttribute("d", `M${this.chartWidth / 2},${this.chartWidth / 2} L${startX},${startY} A${this.radian},${this.radian}, 0 0,1 ${endX},${endY} Z`)
    console.log(this.radian)
    pieSlice.setAttribute("fill", data.color)

    return pieSlice
  }

  #convertToRadians(degrees) {
    return degrees * Math.PI / 180
  }


}