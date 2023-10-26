
export class PieChart {

  constructor(data, options) {
    this.chartData = data
    this.chartOptions = options //use setter in future.
    this.smallestDimension = (this.chartOptions.size.width < this.chartOptions.size.height ? this.chartOptions.size.width : this.chartOptions.size.height)
    this.pieWidth =  this.smallestDimension * 0.75
    this.radian = this.pieWidth / 2
  }

  createPieChart() { 
    const data = this.chartData
    let currentAngleInRadians = this.#convertToRadians(270)
    const pieGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    for (let index = 0; index < data.length; index++) {
      const pieSlice = this.#generateSlice(data[index], currentAngleInRadians)
      pieSlice.setAttribute("stroke", "white")
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title")
      title.textContent = `${data[index].argument}: ${data[index].value} \n ${parseFloat((data[index].percent * 100).toFixed(2))}%`
      pieSlice.appendChild(title)
      currentAngleInRadians += this.#convertToRadians(data[index].percent * 360)
      pieGroup.appendChild(pieSlice)
    }
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "path")
    circle.setAttribute("d", `M${this.chartOptions.size.width / 2}, ${this.chartOptions.size.height / 2} m${-this.radian}, 0 a${this.radian},${this.radian} 0 1,0 ${(this.smallestDimension / 2) * 1.5},0 a${this.radian},${this.radian} 0 1,0 ${-(this.smallestDimension / 2) * 1.5},0`)
    circle.setAttribute("fill", "none")
    circle.setAttribute("stroke", "black")
    pieGroup.appendChild(circle)
    return pieGroup
  }

  #generateSlice(data, startAngleInRadians) {
    const pieSlice = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const startX = this.chartOptions.size.width / 2 + Math.cos(startAngleInRadians) * this.radian
    const startY = this.chartOptions.size.height / 2 + Math.sin(startAngleInRadians) * this.radian
    const endX = this.chartOptions.size.width / 2 + Math.cos(startAngleInRadians + this.#convertToRadians(data.percent * 360)) * this.radian
    const endY = this.chartOptions.size.height / 2 + Math.sin(startAngleInRadians + this.#convertToRadians(data.percent * 360)) * this.radian


    pieSlice.setAttribute("d", `M${this.chartOptions.size.width / 2},${this.chartOptions.size.height / 2} L${startX},${startY} A${this.radian},${this.radian}, 0 ${data.percent > 0.5 ? 1 : 0},1 ${endX},${endY} Z`)
    pieSlice.setAttribute("fill", data.color)

    return pieSlice
  }

  #convertToRadians(degrees) {
    return degrees * Math.PI / 180
  }


}