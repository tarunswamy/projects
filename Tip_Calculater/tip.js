const bottom_buttons=document.querySelectorAll(".left-buttons")
let number=document.querySelector(".number")
let bill_total=document.querySelector("#bill-total")
let tip=document.querySelector("#tip")
let total_per_person =document.querySelector(".result")

var n=1
bottom_buttons.forEach(element=>{
    element.onclick=()=>{
        if (element.className==='plus left-buttons'){
            n+=1
        }
        else if(n>1){
            n-=1
        }
        number.innerText=`${n}`
        calculateBill()
    }
})

function calculateBill() {
    total_bill=Number(bill_total.value)
    totlal_tip=Number(tip.value)
    res=((totlal_tip/100)*total_bill)+total_bill
    result=res/n
    total_per_person.innerText=`$${result}`
}
