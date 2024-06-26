"use strict";

const indicator = document.querySelector("[data-indicator]")


document.addEventListener("click", e => {
    let anchor
    if (e.target.matches("a")) {
        anchor = e.target
    } else {
        anchor = e.target.closest("a")
    }
    if (anchor != null) {
        const allAnchors = [...document.querySelectorAll("a")]
        const index = allAnchors.indexOf(anchor)
        indicator.style.setProperty("--position", index)
        document.querySelectorAll("a").forEach(elem => {
            elem.classList.remove("active")
        })
        anchor.classList.add("active")
    }
})

const ECRA_INICIAL = "pageOne";
const ECRA_MENU = "ecra_menu";
const ECRA_FATURAS = "ecra_faturas";
const ECRA_PEDIDOS = "ecra_pedidos";
const ECRAS_ANTERIORES = [ECRA_INICIAL];
const Ecra_Aberto = "";

const screens = ["pageOne", "ecra_menu", "ecra_faturas", "ecra_pedidos"];

function mostrar(el) {
    document.getElementById('btn_icon_img2').removeAttribute("onclick");
    document.getElementById('btn_icon_img1').removeAttribute("onclick");
    document.getElementById('btn_icon_img3').removeAttribute("onclick");

    if (el == "ecra_faturas") { document.getElementById("icon_img2").click() }
    if (el == "ecra_menu") { document.getElementById("icon_img1").click() }
    if (el == "ecra_pedidos") { document.getElementById("icon_img3").click() }

    if (ECRAS_ANTERIORES.length == 1) {
        ECRAS_ANTERIORES[0] = "pageOne";
    }
    for (var i = 0; i < screens.length; i++) {
        if (screens[i] == el) {
            ECRAS_ANTERIORES.push(el);
            document.getElementById(el).style.display = 'block';
        } else {
            document.getElementById(screens[i]).style.display = 'none';
        }
    }


    document.getElementById('btn_icon_img2').setAttribute("onclick", "mostrar('ecra_faturas'), fechar_pop('Chamar_empregado'), fechar_pop('Pop_WC'), fechar_pop('Pop_ajuda'), destruir('adiciona_ao_pedido'), destruir('testa'), fechar_pop('Pop_ajuda')");
    document.getElementById('btn_icon_img1').setAttribute("onclick", "mostrar('ecra_menu'), fechar_pop('Pop_WC'), fechar_pop('Chamar_empregado'), fechar_pop('Pop_ajuda'), destruir('adiciona_ao_pedido'), destruir('testa'), fechar_pop('Pop_ajuda')");
    document.getElementById('btn_icon_img3').setAttribute("onclick", "mostrar('ecra_pedidos'), fechar_pop('Chamar_empregado'), fechar_pop('Pop_WC'), trataPedido(), mostraPedido(), fechar_pop('Pop_ajuda'), destruir('adiciona_ao_pedido'), destruir('testa'), fechar_pop('Pop_ajuda')");
    


    document.addEventListener("click", function() {
        if(document.getElementById("numero_pedidos").innerHTML != '0'){

            document.getElementById('btn_icon_img3').setAttribute("style", "opacity:1;"); 
            document.getElementById('icon_img3').setAttribute("style", "opacity:1;"); 
            document.getElementById('confirmar_filtro').setAttribute("style", "opacity:1;"); 





            document.getElementById('btn_icon_img3').setAttribute("style", "pointer-events:auto;");
            document.getElementById('icon_img3').setAttribute("style", "pointer-events:auto;");
            document.getElementById('confirmar_filtro').setAttribute("style", "pointer-events:auto;");




        }
        else{
        

            document.getElementById('btn_icon_img3').setAttribute("style", "pointer-events:none;");
            document.getElementById('icon_img3').setAttribute("style", "pointer-events:none;");
            document.getElementById('confirmar_filtro').setAttribute("style", "pointer-events:none;");

            document.getElementById('btn_icon_img3').setAttribute("style", "opacity:0.5;"); 
            document.getElementById('icon_img3').setAttribute("style", "opacity:0.5;"); 
            document.getElementById('confirmar_filtro').setAttribute("style", "opacity:0.5;"); 

            
        }
    });

}

function Pop_up() {
    document.getElementById("O_Popup").style.display = "flex";
    setTimeout(function() { popup.classList.toggle("show"); }, 1000);

    var numero = document.getElementById("O_Popup").innerHTML;
    if (document.getElementsByClassName("show")) {
        document.getElementById("O_Popup").innerHTML = '+' + (parseInt(numero) + 1);
    }
}

var btn = document.querySelectorAll('.infoBtn');

[...btn].forEach((btn) => {
    btn.addEventListener('click', function() {
        btn.classList.toggle('is-flipped');
    });
});

function mostrar2(el) {

    for (var i = 0; i < screens.length; i++) {
        if (screens[i] == el) {
            document.getElementById(el).style.display = 'block';
        } else {
            document.getElementById(screens[i]).style.display = 'none';
        }
    }
}

function mostrar_anterior() {
    document.getElementById('btn_icon_img2').removeAttribute("onclick");
    document.getElementById('btn_icon_img1').removeAttribute("onclick");
    document.getElementById('btn_icon_img3').removeAttribute("onclick");

    if (ECRAS_ANTERIORES[ECRAS_ANTERIORES.length - 2] == "ecra_faturas") { document.getElementById("icon_img2").click() }
    if (ECRAS_ANTERIORES[ECRAS_ANTERIORES.length - 2] == "ecra_menu") { document.getElementById("icon_img1").click() }
    if (ECRAS_ANTERIORES[ECRAS_ANTERIORES.length - 2] == "ecra_pedidos") { document.getElementById("icon_img3").click() }

    if (ECRAS_ANTERIORES == []) {
        mostrar2("pageOne");
    } else if (ECRAS_ANTERIORES.length == 3) {
        ECRAS_ANTERIORES.pop();
        mostrar2("pageOne");
    } else {
        ECRAS_ANTERIORES.pop();
        mostrar2(ECRAS_ANTERIORES[ECRAS_ANTERIORES.length - 1]);
    }
    document.getElementById('btn_icon_img2').setAttribute("onclick", "mostrar('ecra_faturas'), fechar_pop('Chamar_empregado'), fechar_pop('Pop_WC')");
    document.getElementById('btn_icon_img1').setAttribute("onclick", "mostrar('ecra_menu'), fechar_pop('Pop_WC'), fechar_pop('Chamar_empregado')");
    document.getElementById('btn_icon_img3').setAttribute("onclick", "mostrar('ecra_pedidos'), fechar_pop('Chamar_empregado'), fechar_pop('Pop_WC'), trataPedido(), mostraPedido()");

}