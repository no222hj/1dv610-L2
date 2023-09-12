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

  generateChart() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "200")
    svg.setAttribute("height", "200")
    let pieCircumference = 2 * Math.PI * 100
    const pieSliceOne = document.createElementNS("http://www.w3.org/2000/svg", "path")
    pieSliceOne.setAttribute("d", "M100,100 L200,100 A100,100 0 0,1 100,200 Z")
    pieSliceOne.setAttribute("fill", "red")
    const pieSliceTwo = document.createElementNS("http://www.w3.org/2000/svg", "path")
    pieSliceTwo.setAttribute("d", "M100,100 L100,200 A100,100 0 0,1 0,100 Z")
    pieSliceTwo.setAttribute("fill", "green")
    const pieSliceThree = document.createElementNS("http://www.w3.org/2000/svg", "path")	
    pieSliceThree.setAttribute("d", "M100,100 L0,100 A100,100 0 0,1 100,0 Z")
    pieSliceThree.setAttribute("fill", "blue")
    const pieSliceFour = document.createElementNS("http://www.w3.org/2000/svg", "path")
    pieSliceFour.setAttribute("d", "M100,100 L100,0 A100,100 0 0,1 200,100 Z")
    svg.appendChild(pieSliceOne)
    svg.appendChild(pieSliceTwo)
    svg.appendChild(pieSliceThree)
    svg.appendChild(pieSliceFour)
    return svg
  }

  createChart() { 
    const data = this.chartData
    console.log(data)
    let currentAngleInRadians = 0
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "200")
    svg.setAttribute("height", "200")
    for (let index = 0; index < data.length; index++) {
      const pieSlice = this.generateSlice(data[index], currentAgnleInRadians)
      currentAngleInRadians += (data[index].percent * 360) * Math.PI / 180
      svg.appendChild(pieSlice)
    }
    return svg
  }

  generateSlice(data, startAngleInRadians) {
    const pieSlice = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const startX = 100 + Math.cos(startAngleInRadians) * 100
    const startY = 100 + Math.sin(startAngleInRadians) * 100
    const endX = 100 + Math.cos(startAngleInRadians + (data.percent * 360) * Math.PI / 180) * 100



    return pieSlice
  }

  


}