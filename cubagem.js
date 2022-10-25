var h4C = document.querySelector(".h4C")
var inputCD = document.querySelector(".inputCD")
var inputCA = document.querySelector(".inputCA")
var btnC = document.querySelector(".btnC")

var h4R = document.querySelector(".h4R")
var inputRA = document.querySelector(".inputRA")
var inputRL = document.querySelector(".inputRL")
var inputRC = document.querySelector(".inputRC")
var btnR = document.querySelector(".btnR")

btnC.addEventListener("click", Circulo);
btnR.addEventListener("click",Cubo)
function Circulo(){
    var r = inputCD.value;

    var altura = inputCA.value;

    var valor =Math.PI*Math.pow(r/2,2)*altura;
    h4C.innerHTML = Math.round(Math.floor(valor)/1000)+" Litros";
}

function Cubo(){
    var valor = inputRA.value*inputRC.value*inputRL.value/1000
    h4R.innerHTML = valor+" Litros";

}