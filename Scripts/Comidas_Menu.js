const HAMBURGUER = "quantidade_hamburguer_g_l";
const MASSA_T_C = "quantidade_massa_tinta_choco";
const SUMO_LARANJA = "quantidade_sumo_laranja";
const AGUA = "quantidade_agua";
const COCA_COLA = "quantidade_coca_cola";
const MOUSSE = "quantidade_mousse";
const SALMAO = "quantidade_salmao";
const TOFU = "quantidade_massa_tofu";
const VINHO_BRANCO = "quantidade_joao_pires";
const VINHO_TINTO = "quantidade_papa_figos";
const ARROZ_DOCE = "quantidade_arroz_doce";
const PETIT = "quantidade_petit";

const CAIPI = "quantidade_caipi";
const DAIQUIRI = "quantidade_daiquiri";
const EXPRESSO = "quantidade_expresso";
const CAFE = "quantidade_cafe"
const CROSTINI = "quantidade_crostini";
const TARTARO = "quantidade_tartaro";
const SAUTE = "quantidade_saute"



function somar(x) {
    console.log("somar")
    document.getElementById(x).innerHTML = 1 + parseInt(document.getElementById(x).innerHTML);
    document.getElementById(x).style.color= 'white';

    
        
    
    
}

/*  função verifica as quantidades de comida que são adicionadas no menu, soma tudo e altera o pop up dos pedidos automaticamente*/

const Comida_menu = [HAMBURGUER, CROSTINI, SAUTE, AGUA, TARTARO, SUMO_LARANJA, COCA_COLA, MASSA_T_C, DAIQUIRI, MOUSSE, CAIPI, SALMAO, TOFU, VINHO_BRANCO, CAFE, VINHO_TINTO, EXPRESSO, ARROZ_DOCE, PETIT];

function adicionar_pedido() {
    console.log("adicion")

    var total = 0;
    for (let i = 0; i < Comida_menu.length; i++) {
        total = total + parseInt(document.getElementById(Comida_menu[i]).innerHTML)
    }

    document.getElementById("numero_pedidos").innerHTML = (total).toString();
    document.getElementById("numero_pedidos").style.display = "block";
    
    
}

/* Esta função recebe um id e reduz 1 */

function tirar_pedido(x) {
    if (document.getElementById(x).innerHTML != '0') {

        var total = parseInt(document.getElementById("numero_pedidos").innerHTML);
        total--;
        document.getElementById(x).innerHTML = parseInt(document.getElementById(x).innerHTML) - 1;
        document.getElementById("numero_pedidos").innerHTML = '+' + (total).toString();
        document.getElementById("numero_pedidos").style.display = "block";
        

        if (parseInt(document.getElementById("numero_pedidos").innerHTML) < 1) {
            document.getElementById("numero_pedidos").style.display = "none";
        }
    }

}