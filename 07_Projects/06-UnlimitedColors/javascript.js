// Generate Random color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomColor())

const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor()
} 

let intervalId;
const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor,500)
    }
}

const stopChangingColor = () => {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);