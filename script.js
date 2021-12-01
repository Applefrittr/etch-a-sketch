const container = document.querySelector('.container')

for (let i=0; i < 16; i++) { 
    const grid = document.createElement('div')
    grid.classList.add('grid')
      
    container.appendChild(grid)

    for (let j=0; j<16; j++)    {
        const column = document.createElement('div')
        column.classList.add('column')

        grid.appendChild(column)
    }
}