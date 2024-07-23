const menu = document.querySelector("#icon-menu")

menu.addEventListener("click", (e) => {

    if(menu.classList.contains("desativado")){
        menu.classList.remove("desativado")
        menu.classList.add("ativado")
        menu.src = "img/close.png"
        document.querySelector(".nav-hamburguer").style.display = "block"
        
    }
    else{
        menu.classList.remove("ativado")
        menu.classList.add("desativado")
        menu.src = "img/menu.png"
        document.querySelector(".nav-hamburguer").style.display = "none"
    }
} )

window.addEventListener("resize", () => {
    if(window.innerWidth > 740){
        document.querySelector(".nav-hamburguer").style.display = "none"
        menu.classList.remove("ativado")
        menu.classList.add("desativado")
        menu.src = "img/menu.png"
    }
})
