const container = document.querySelector('.container')

for (let i=0; i < 64; i++) { 
    const column = document.createElement('div')
    column.classList.add('column')
      
    container.appendChild(column)

    for (let j=0; j < 64; j++)    {
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

