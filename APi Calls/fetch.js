let fetchedData = document.getElementById('output')

let getBtn = document.getElementById('getBtn')
let clearBtn = document.getElementById('clearBtn')

function getData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data=>data.json())
    .then(data=>{
        for(let i=0; i<data.length; i++){
            fetchedData.innerHTML+=
            `name: ${data[i].name} <br>
            username: ${data[i].username}<br>
            email: ${data[i].email}<br>
            Geo locaion: ${data[i].address.geo.lat}, ${data[i].address.geo.lng}<br><br>`
        }
    })

    getBtn.style.display='none'
    clearBtn.style.display='block'    
}

function clearData(){
        fetchedData.innerHTML=''
        getBtn.style.display='block'
        clearBtn.style.display='none'
    }  