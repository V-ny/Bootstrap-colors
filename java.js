let botao1 = document.querySelector("#btn1")
botao1.addEventListener("mouseover", inteleon)

let botao2 = document.querySelector("#btn2")
botao2.addEventListener("mouseover", drizzile)

let botao3 = document.querySelector("#btn3", sobble)
botao3.addEventListener("mouseover", sobble)

let botao4 = document.querySelector("#btn4", kecleon)
botao4.addEventListener("mouseover", kecleon)

addEventListener("mouseout", saia)

function inteleon(){
    console.log("Estoy aqui")
    document.body.style.backgroundColor = "#9c9792"
    document.getElementById("pag").style.color = "#d9ff5c";
}
function drizzile(){
    document.body.style.backgroundColor = "#a7ed6d"
    document.getElementById("pag").style.color = "#ff0000";
}
function sobble(){
    document.body.style.backgroundColor = "#0dafd4"
    document.getElementById("pag").style.color = "#ff5c6f";
}
function kecleon(){
    document.body.style.backgroundColor = "#b65cff"
    document.getElementById("pag").style.color = "#5cffb8";
}
function saia(){
    document.body.style.backgroundColor = "#ffffff"
    document.getElementById("pag").style.color = "#000000";
}