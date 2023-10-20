# Project Releted TO DOM
# Project Link - 
[Click Here]

# Solution Code

## Project 1 BG Color Changer
```
JavaScript
console.log('Prasad')
const btns = document.querySelectorAll('.btn')
console.log(btns)

const body = document.querySelector('body')

btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        } else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        } else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'white'
        } else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
        
    })
})
```

## Project 2 BMI Calculator
```
JavaScript
console.log('Prasad')
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    
    if (height == '' || height == null || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give valid height"
    } else if (weight == '' || weight == null || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give valid height"
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<spam>${bmi}</span>`
    }
    
})

```
## Project 3 Digital Clock
```
const clock = document.querySelector('#clock')

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
