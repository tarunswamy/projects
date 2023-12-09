const elements = document.querySelectorAll(".button");// gives node list

const times_clicked={"orange":0,"pink":0,"blue":0}

elements.forEach(element=>{ //for each only works on array
    element.onclick=()=>{
        times_clicked[element.id]+=1
        element.innerHTML=`<h2>${times_clicked[element.id]}</h2>`
    }
})

const reset=document.getElementById("reset")
reset.onclick=()=>{
    for (const key in times_clicked) {
        times_clicked[key]=0;
    }
    elements.forEach(element=>
    element.innerHTML=`<h2>${element.id}</h2>`)
}