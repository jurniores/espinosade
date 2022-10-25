var ph2 = document.querySelector(".ph2")
var sh2 = document.querySelector(".sh2")
var input = document.querySelector("input")
var btn = document.querySelector("button")

btn.addEventListener("click", Converte);



function Converte(e){
    let val = input.value;
    if(val.length <= 0) return;
    ph2.innerHTML = Math.round((val*0.675)/100)+"g"
    sh2.innerHTML = (val/2)/100+" Qtd";
    input.value = "";
}



