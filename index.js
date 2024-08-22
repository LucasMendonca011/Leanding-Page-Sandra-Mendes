var setaesquerda = window.document.getElementById("setaesquerda")
var cabelo1 = window.document.getElementById("cabelo1")
var cabelo2 = window.document.getElementById("cabelo2")
var cabelo3 = window.document.getElementById("cabelo3")
var cabelo4 = window.document.getElementById("cabelo4")
var setadireita = window.document.getElementById("setadireita")

function RolarParaDireita1(){
    cabelo1.style = "display:none"
    cabelo2.style = "display:none"
    cabelo3.style = "display:flex"
    cabelo4.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:70px; margin-right:-70px"
}

function RolarParaEsquerda1(){
    cabelo1.style = "display:flex"
    cabelo2.style = "diaplay:flex"
    cabelo3.style = "display:none"
    cabelo4.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none; margin-top:70px; margin-right:-70px"
}

var setaesquerda2 = window.document.getElementById("setaesquerda2")
var maquiagem1 = window.document.getElementById("maquiagem1")
var maquiagem2 = window.document.getElementById("maquiagem2")
var maquiagem3 = window.document.getElementById("maquiagem3")
var maquiagem4 = window.document.getElementById("maquiagem4")
var setadireita2 = window.document.getElementById("setadireita2")

function RolarParaDireita2(){
    maquiagem1.style = "display:none"
    maquiagem2.style = "display:none"
    maquiagem3.style = "display:flex"
    maquiagem4.style = "display:flex"
    setadireita2.style = "display:none"
    setaesquerda2.style = "display:flex"
}

function RolarParaEsquerda2(){
    maquiagem1.style = "display:flex"
    maquiagem2.style = "display:flex"
    maquiagem3.style = "display:none"
    maquiagem4.style = "display:none"
    setadireita2.style = "display:flex"
    setaesquerda2.style = "display:none"
}