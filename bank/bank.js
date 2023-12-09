let input=document.querySelector("#input")
let deposite=document.querySelector(".deposite")
let withdraw=document.querySelector(".withdraw")
let balance=document.querySelector(".balance")
let Balance=0

deposite.onclick=()=>{
    let Damount=Number(input.value)
    Balance+=Damount
    balance.innerText=`Balance:${Balance}`
}

withdraw.onclick=()=>{
    let Wamount=Number(input.value)
    if (Balance>=Wamount) {
        Balance-=Wamount
        balance.innerText=`Balance:${Balance}`
    } else {
        balance.innerText=`You don't have enough Balance:${Balance} to with draw`
    }
    
}
