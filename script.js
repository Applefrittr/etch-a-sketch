const container = document.querySelector('.container')

const pixVal = document.querySelector('.pixVal')
const slider = document.querySelector('.slider')

pixVal.textContent = slider.value

slider.oninput = function()  {
    pixVal.textContent = this.value
    console.log(slider.value)
    deleteGrid(container)
    createGrid()
}
createGrid()

function createGrid()   {
    
    for (let i=0; i < slider.value; i++) { 
        const column = document.createElement('div')
        column.classList.add('column')
      
        container.appendChild(column)

        for (let j=0; j < slider.value; j++)    {
            const grid = document.createElement('div')
            grid.classList.add('grid')

            column.appendChild(grid)
        }
    }
    const divs = document.querySelectorAll('.grid')
    console.log(divs)
    
    let draw = false
    
    container.addEventListener('mousedown', () =>   {
        draw = true
    })
    
    container.addEventListener('mouseup', () =>     {
        draw = false
    })
    
    divs.forEach((grid)    => {
        grid.addEventListener('mouseover', () =>    {
            if(draw == true)    {
                grid.classList.add('etch')
            }
        })
    })
}

function deleteGrid(container)      {
    
    while (container.firstChild)    {
        container.removeChild(container.firstChild)
    }          
}
