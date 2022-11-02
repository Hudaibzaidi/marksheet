var accounts =+ prompt("enter your accounts marks")
    console.log(accounts)
var english =+ prompt("enter your urdu marks")
    console.log(english)
var poc =+ prompt("enter your poc marks")
    console.log(poc)
var islamiyat =+ prompt("enter your islamiyat marks")
    console.log(islamiyat)
var math =+ prompt("enter your math marks")
    console.log(math)
var ecnomices =+ prompt("enter your ecnomices marks")
    console.log(ecnomices)


var totalmarks =accounts+english+poc+islamiyat+math+ecnomices
    console.log(totalmarks)
var percan = totalmarks / 7
    console.log(percan)

if(percan >= 80 && percan <= 100){
    console.log("A+")
}else if(percan >= 70 && percan <= 80){
    console.log("A")
}else if(percan >= 60 && percan <= 70){
    console.log("B")
}else if(percan >= 50 && percan <= 60){
    console.log("C")
}else if(percan >= 40 && percan <= 50){
    console.log("D")
}
else{
    console.log("you are fail")
}
