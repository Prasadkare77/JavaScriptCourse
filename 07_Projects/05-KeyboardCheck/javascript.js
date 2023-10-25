const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    <div class="color">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Key</th>
                <th scope="col">KeyCode</th>
                <th scope="col">Code</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${e.key === ' ' ? 'Space' : e.key}</th>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                    
                </tr>
                
            </tbody>
        </table>
    </div>`
})