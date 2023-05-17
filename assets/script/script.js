var Icon = document.getElementById("Icon")
var IconButton = document.getElementById("IconButton")
var header = document.getElementsByClassName("header")[0]
var fechar = document.getElementById("fechar")

IconButton.addEventListener("click",mostraMenu)
fechar.addEventListener("click",fechaMenu)

function mostraMenu (){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "column"
    hamburguer.style.display = "flex"
    hamburguerButton.style.display = "none"
}

function fechaMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "row"
    hamburguer.style.display = "none"
    hamburguerButton.style.display = "flex"
}