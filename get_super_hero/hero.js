let container=document.querySelector(".container")
let HN=document.querySelector(".imagetext")
let btnPowerStats=document.querySelector(".getpowerstats")
let ShowPowerStats=document.querySelector(".show_power_stats")
let pikach=document.querySelector(".pikach")
let input=document.querySelector("#input")
let main=document.querySelector(".main")
let mainunder=document.querySelector(".under")
let close=document.querySelector(".close")
let husk=document.querySelector(".husk")


// ****************************  THE BELOW CODE IS IMPORTANT TO UNDERSTAND HOW TO GIVE VARIABLES IN URLS    ***************************
const token='10223569763528853'
const base_url=`https://www.superheroapi.com/api.php/${token}`

const heroimage=()=>{
    ShowPowerStats.innerHTML=`<h1></h1>`
    id=Math.floor(Math.random() * 732)
    fetch(`${base_url}/${id}`).then(response=>response.json())
    .then(json=>{
        container.innerHTML=`<img src='${json.image.url}' alt="hero image" width=500; height=500>`
        HN.innerHTML=`${json.name}</h2>`
        btnPowerStats.onclick=()=>{
            main.classList.add("move");
            mainunder.classList.add("moveunder");
            console.log(json.powerstats)
            let powerstats=json.powerstats
            keys=Object.keys(powerstats)
            for (let i of keys){
                ShowPowerStats.innerHTML+=`<h1>${i} : ${powerstats[`${i}`]}</h1>`
            }
        }
    })
}


const Searchimage=()=>{
    const hero=input.value
    fetch(`${base_url}/search/${hero}`).then(response=>response.json())
    .then(json=>{
        const hero_name=`<h2>${json.results[0].name}</h2>`
        const hero_image=`<img src='${json.results[0].image.url}' alt="hero image" width=500; height=500>`
        container.innerHTML=`${hero_image}`
        HN.innerHTML=`${hero_name}</h2>`
    })
    
}


// function close(){
    // husk.classList.add("moveopp");
    // ShowPowerStats.classList.add("moveunderopp");
//     console.log("you clicked close")
// }
close.onclick=()=>{
    console.log("you clicked")
    husk.classList.add("moveopp");
    // pikach.classList.add("moveunderopp");
    // pikach.remove();
}
