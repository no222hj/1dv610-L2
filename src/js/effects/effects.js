/**
 * Class for creating a pie chart
 * 
 * @author Nathanael Olsson
 * @verison 1.0.0
 */

/**
 * Adds effects to elements
 */

export class Effects {


    constructor() {
    }
  
  
    addTooltip(element) { 
        element.addEventListener("mouseover", (event) => {
            const tooltip = document.createElement("div")
            const text = document.createElement("p")
            text.innerHTML = `${element.dataset.name}: ${element.dataset.amount}`
            tooltip.appendChild(text)

            tooltip.classList.add("tooltip")
            tooltip.innerHTML = `Name: Amount`
            tooltip.style.left = `${event.pageX}px`
            tooltip.style.top = `${event.pageY}px`
            document.body.appendChild(tooltip)
        })
        element.addEventListener("mouseout", (event) => {
            document.body.removeChild(document.querySelector(".tooltip"))
        }
        )

        return element
    }

    getCursorPosition(event) {
        let CurrentTransformMatrix = svg.getScreenCTM();
        return {
            x: (event.clientX - CTM.e) / CTM.a,
            y: (event.clientY - CTM.f) / CTM.d
        };

  }
}