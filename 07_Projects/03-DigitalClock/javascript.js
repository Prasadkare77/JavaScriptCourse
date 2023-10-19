const clock = document.querySelector('clock')

setInterval(() => {
    let date = new Date()
    console.log(date.toLocaleDateString);
    clock.innerHTML = date.toLocale
},1000)