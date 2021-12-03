const container = document.querySelector('.container')

const pixVal = document.querySelector('.pixVal')
const slider = document.querySelector('.slider')

pixVal.textContent = slider.value

slider.oninput = function()  {                           //Slider to determine grid pixels w/ built in grid clear
    pixVal.textContent = this.value
    console.log(slider.value)
    deleteGrid()
    createGrid()
}
createGrid()                                            //creates frist grid on page load

function createGrid()   {                               //main fucntion which generates grid depending on slider choice
    
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
    
    let draw = false                                    // combined eventlisteners moouse down and mouse hover to create the mousedown & hold to draw
       
    container.addEventListener('mousedown', () =>   {
        draw = true
    })
    
    container.addEventListener('mouseup', () =>     {
        draw = false
    })
    
    divs.forEach((grid)    => {
        grid.addEventListener('mouseover', () =>    {       //inline css used to 'draw'
            if(draw == true && blkToggle == true)    {
                grid.style.backgroundColor = 'black'
            } else if(draw == true && rnbwToggle == true)   {
                grid.style.backgroundColor = colors()
            } else if(draw == true && ersToggle == true)    {
                grid.style.backgroundColor = 'mintcream'
            }
        })
    })
}

function deleteGrid()      {                                //clears grid by interating through container and deleting all child nodes
    
    while (container.firstChild)    {
        container.removeChild(container.firstChild)
    }          
}


let blkToggle = false                                       // Logic for Color/Eraser buttons
const black = document.querySelector('.black')              //Toggle variables used in createGrid() to determine which etch color used via classList.add

let rnbwToggle = false
const rainbow = document.querySelector('.rainbow')

let ersToggle = false
const eraser = document.querySelector('.eraser')

const clear = document.querySelector('.clear')

black.addEventListener('click', ()  =>  {
    blkToggle = true
    rnbwToggle = false
    ersToggle = false

    black.classList.add('selected')
    rainbow.classList.remove('selected')
    eraser.classList.remove('selected')

}) 

rainbow.addEventListener('click', ()  =>  {
    blkToggle = false
    rnbwToggle = true
    ersToggle = false

    black.classList.remove('selected')
    rainbow.classList.add('selected')
    eraser.classList.remove('selected')

}) 

eraser.addEventListener('click', ()  =>  {
    blkToggle = false
    rnbwToggle = false
    ersToggle = true

    black.classList.remove('selected')
    rainbow.classList.remove('selected')
    eraser.classList.add('selected')

})

clear.addEventListener('click', () =>   {
    deleteGrid()
    createGrid()
})

function colors()  {                                        //rainbow function, randoms only major colors using rgb.  Only values allowed are 0 or 255
    let x = Math.floor(Math.random() * 2)
    let y = Math.floor(Math.random() * 2)
    let z = Math.floor(Math.random() * 2)

    let r
    let g
    let b

    if (x == 0) {
        r = 0
    } else {
        r = 255
    }

    if (y == 0) {
        g = 0
    } else {
        g = 255
    }

    if (z == 0) {
        b = 0
    } else {
        b = 255
    }
    let color = [r,g,b]
    console.log('rgb(' + color + ')')
    return 'rgb(' + color + ')'

}