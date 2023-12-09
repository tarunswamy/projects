let buttons = document.querySelectorAll(".button")
let result = document.querySelector(".result")
let input = document.querySelector(".input")

let number =""
const operations=["+","-","/","*"]
buttons.forEach(button=>{
    button.onclick=()=>{
        if(operations.includes(button.innerText)){
            if (result.innerText!=0){
                result.innerText=0
                number+=button.innerText
                input.innerText=number
        }}else if(button.innerText==="←"){
            if (input.innerText!=0){
                number=number.slice(0,-1)
                calculate()
        }}else if(button.innerText=="ac"){
            number=""
            input.innerText=0
            result.innerText=0
        }else if(button.innerText=="."){
            number+="0."
            calculate()
        }else{
            number+=button.innerText
            calculate()
        }
    }
})

function calculate(){
    input.innerText=number    
    result.innerText=eval(number)
}
