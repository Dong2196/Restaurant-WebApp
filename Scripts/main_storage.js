/** Identificador do formulário para fazer uma encomenda de piza. */
const TABELA_PEDIDO = "tblPedido";

/** Identificador do formulário para fazer a massa. */
const FORMULARIO_MASSA = "frmMassa";

/** Campo do formulário com o tamanho da piza. */
const TIPO_MASSA = "massa";

/** Campo do formulário com um ingrediente da piza. */
const INGREDIENTE_MASSA = "ingrediente";
/** Item de local storage que guarda o histório de pedidos. */
const ITEM_PEDIDOS = "pedidos";

/** Item de local storage que guarda a faturaçao. */
const ITEM_FATURAS = "faturas";

/**
 * Guarda o histórico de pedidos. Cada elemento do array deve ser um objeto
 * de tipo Encomenda.
 */
let faturas = [];

let pedidos = []



/* ------------------------------------------------------------------------- */
/*                                                   CONSTRUTORES DE OBJETOS */
/* ------------------------------------------------------------------------- */


window.addEventListener("load", principal);

function principal() {


    // Para simplificar o acesso aos elementos do formulário da massa.
    flip()


    filterSelection("prato")
    changeColor("prato")
        // Carrega o histórico de encomendas a partir do local storage do browser.
    carregaHistoricoFaturas()
        //mostraHistoricoEncomendas();
    mostraTodasFaturas()
        // Associar comportamento a elementos na página HTML.
    defineEventHandlersParaElementosHTML();
}
/**
 * Associa event handlers a elementos no documento HTML, em particular botões.
 * Com esta abordagem, evitam-se atributos onclick ou similares, e faz-se uma
 * melhor separação entre conteúdo, em HTML, e comportamento, em JavaScript.
 */
let cards = document.querySelectorAll('.flipCard');
let cardsBack = document.querySelectorAll('.card__face--back');

function flip() {


    for (let x = 0; x < cards.length; x++) {
        mainCard = document.getElementsByClassName("card__face--front")[x]
        let infobtn = document.createElement("div")
        let classe = "infoBtn infoBtnCss btnflipfront" + x

        infobtn.setAttribute("class", classe)
        infobtn.addEventListener('click', function() {
            cards[x].classList.toggle('is-flipped');
        });
        mainCard.appendChild(infobtn)

    }

    for (let x = 0; x < cards.length; x++) {
        let classe1 = " btnBack  btnflipfront" + x


        mainCard = document.getElementsByClassName("card__face--back")[x]
        let infobtnback = document.createElement("div")
        infobtnback.setAttribute("class", classe1)

        infobtnback.addEventListener('click', click.bind(null, classe1));
        mainCard.appendChild(infobtnback)
    }
}

function click(classe) {

    document.getElementsByClassName(classe)[0].click();

}

function carregaHistoricoFaturas() {




    faturas_lista = JSON.parse(localStorage.getItem(ITEM_FATURAS)) || [];
    faturas_lista.push([
        ['1', 'Massa de Tinta de choco c/ camarão', '16.90€', 'quantidade_massa_tinta_choco'],
        ["1", "Crostini de Abacate", "8.90€", "quantidade_crostini"],
        ["2", "Sumo de Laranja Natural", "3.90€", "quantidade_sumo_laranja"],
        " 33.60€", "20-02-2020 18:21"
    ])


    elementosFaturas = faturas_lista
        // A parte "|| []" em cima serve para garantir que o histórico de encomendas
        // em memória existe (como array), pois pode dar-se o caso de JSON.parse()
        // devolver null se for a primeira vez que executamos a aplicação.
}



function carregaHistoricoPedidos() {
    pedidos = JSON.parse(localStorage.getItem(ITEM_PEDIDOS)) || [];

    // A parte "|| []" em cima serve para garantir que o histórico de encomendas
    // em memória existe (como array), pois pode dar-se o caso de JSON.parse()
    // devolver null se for a primeira vez que executamos a aplicação.
}

function gravaFatura(fatura) {

    // Coloca a encomenda no histórico e guarda-o no local storage do browser.
    faturas.push(fatura);
    gravaHistoricoFaturas();
}
/** 
 * Grava a encomenda no histórico de encomendas.
 * 
 * @param {Encomenda} encomenda - Objeto com os dados da encomenda.
 */
function gravaPedido(pedido) {

    // Coloca a encomenda no histórico e guarda-o no local storage do browser.
    pedidos.push(pedido);
    gravaHistoricoPedidos();
}



function defineEventHandlersParaElementosHTML() {

    //document.getElementById(BOTAO_FAZER_ENCOMENDA).
    //addEventListener("click", trataFazerEncomenda);
    //document.getElementById(BOTAO_APAGAR_HISTORICO).
    //addEventListener("click", trataFazerApagarHistorico);
    // Exercício: Colocar aqui o código em falta.
}

elementosPedido = []

function apagaPedido() {}

function trataPedido() {


    var prato0 = document.getElementById('quantidade_hamburguer_g_l').innerHTML;
    var prato1 = document.getElementById('quantidade_massa_tinta_choco').innerHTML;
    var prato2 = document.getElementById('quantidade_sumo_laranja').innerHTML;
    var prato3 = document.getElementById('quantidade_agua').innerHTML;
    var prato4 = document.getElementById('quantidade_coca_cola').innerHTML;
    var prato5 = document.getElementById('quantidade_mousse').innerHTML;
    var prato6 = document.getElementById('quantidade_salmao').innerHTML;
    var prato7 = document.getElementById('quantidade_massa_tofu').innerHTML;
    var prato8 = document.getElementById('quantidade_joao_pires').innerHTML;
    var prato9 = document.getElementById('quantidade_papa_figos').innerHTML;
    var prato10 = document.getElementById('quantidade_arroz_doce').innerHTML;
    var prato11 = document.getElementById('quantidade_petit').innerHTML;
    var prato12 = document.getElementById('quantidade_caipi').innerHTML;
    var prato13 = document.getElementById('quantidade_daiquiri').innerHTML;
    var prato14 = document.getElementById('quantidade_expresso').innerHTML;
    var prato15 = document.getElementById('quantidade_cafe').innerHTML;
    var prato16 = document.getElementById('quantidade_crostini').innerHTML;
    var prato17 = document.getElementById('quantidade_tartaro').innerHTML;
    var prato18 = document.getElementById('quantidade_saute').innerHTML;
    var prato19 = document.getElementById('quantidade_red').innerHTML;
    var prato20 = document.getElementById('quantidade_tarte').innerHTML;
    var prato21 = document.getElementById('quantidade_pudim').innerHTML;

    if (prato0 > 0) {
        elementosPedido.push([document.getElementById('quantidade_hamburguer_g_l').innerHTML, document.getElementById('prato0').innerHTML, document.getElementById('valor0').innerHTML, "quantidade_hamburguer_g_l"])
    }
    if (prato1 > 0) {
        elementosPedido.push([document.getElementById('quantidade_massa_tinta_choco').innerHTML, document.getElementById('prato1').innerHTML, document.getElementById('valor1').innerHTML, "quantidade_massa_tinta_choco"])
    }
    if (prato2 > 0) {
        elementosPedido.push([document.getElementById('quantidade_sumo_laranja').innerHTML, document.getElementById('prato2').innerHTML, document.getElementById('valor2').innerHTML, "quantidade_sumo_laranja"])
    }
    if (prato3 > 0) {
        elementosPedido.push([document.getElementById('quantidade_agua').innerHTML, document.getElementById('prato3').innerHTML, document.getElementById('valor3').innerHTML, "quantidade_agua"])
    }
    if (prato4 > 0) {
        elementosPedido.push([document.getElementById('quantidade_coca_cola').innerHTML, document.getElementById('prato4').innerHTML, document.getElementById('valor4').innerHTML, "quantidade_coca_cola"])
    }
    if (prato5 > 0) {
        elementosPedido.push([document.getElementById('quantidade_mousse').innerHTML, document.getElementById('prato5').innerHTML, document.getElementById('valor5').innerHTML, "quantidade_mousse"])
    }
    if (prato6 > 0) {
        elementosPedido.push([document.getElementById('quantidade_salmao').innerHTML, document.getElementById('prato6').innerHTML, document.getElementById('valor6').innerHTML, "quantidade_salmao"])
    }
    if (prato7 > 0) {
        elementosPedido.push([document.getElementById('quantidade_massa_tofu').innerHTML, document.getElementById('prato7').innerHTML, document.getElementById('valor7').innerHTML, "quantidade_massa_tofu"])
    }
    if (prato8 > 0) {
        elementosPedido.push([document.getElementById('quantidade_joao_pires').innerHTML, document.getElementById('prato8').innerHTML, document.getElementById('valor8').innerHTM, "quantidade_joao_pires"])
    }
    if (prato9 > 0) {
        elementosPedido.push([document.getElementById('quantidade_papa_figos').innerHTML, document.getElementById('prato9').innerHTML, document.getElementById('valor9').innerHTML, "quantidade_papa_figos"])
    }
    if (prato10 > 0) {
        elementosPedido.push([document.getElementById('quantidade_arroz_doce').innerHTML, document.getElementById('prato10').innerHTML, document.getElementById('valor10').innerHTML, "quantidade_arroz_doce"])
    }
    if (prato11 > 0) {
        elementosPedido.push([document.getElementById('quantidade_petit').innerHTML, document.getElementById('prato11').innerHTML, document.getElementById('valor11').innerHTML, "quantidade_petit"])
    }
    if (prato12 > 0) {
        elementosPedido.push([document.getElementById('quantidade_caipi').innerHTML, document.getElementById('prato12').innerHTML, document.getElementById('valor12').innerHTML, "quantidade_caipi"])
    }
    if (prato13 > 0) {
        elementosPedido.push([document.getElementById('quantidade_daiquiri').innerHTML, document.getElementById('prato13').innerHTML, document.getElementById('valor13').innerHTML, "quantidade_daiquiri"])
    }
    if (prato14 > 0) {
        elementosPedido.push([document.getElementById('quantidade_expresso').innerHTML, document.getElementById('prato14').innerHTML, document.getElementById('valor14').innerHTML, "quantidade_expresso"])
    }
    if (prato15 > 0) {
        elementosPedido.push([document.getElementById('quantidade_cafe').innerHTML, document.getElementById('prato15').innerHTML, document.getElementById('valor15').innerHTML, "quantidade_cafe"])
    }
    if (prato16 > 0) {
        elementosPedido.push([document.getElementById('quantidade_crostini').innerHTML, document.getElementById('prato16').innerHTML, document.getElementById('valor16').innerHTML, "quantidade_crostini"])
    }
    if (prato17 > 0) {
        elementosPedido.push([document.getElementById('quantidade_tartaro').innerHTML, document.getElementById('prato17').innerHTML, document.getElementById('valor17').innerHTML, "quantidade_tartaro"])
    }
    if (prato18 > 0) {
        elementosPedido.push([document.getElementById('quantidade_saute').innerHTML, document.getElementById('prato18').innerHTML, document.getElementById('valor18').innerHTML, "quantidade_saute"])
    }
    if (prato19 > 0) {
        elementosPedido.push([document.getElementById('quantidade_red').innerHTML, document.getElementById('prato19').innerHTML, document.getElementById('valor19').innerHTML, "quantidade_red"])
    }
    if (prato20 > 0) {
        elementosPedido.push([document.getElementById('quantidade_tarte').innerHTML, document.getElementById('prato20').innerHTML, document.getElementById('valor20').innerHTML, "quantidade_tarte"])
    }
    if (prato21 > 0) {
        elementosPedido.push([document.getElementById('quantidade_pudim').innerHTML, document.getElementById('prato21').innerHTML, document.getElementById('valor21').innerHTML, "quantidade_pudim"])
    }



    gravaHistoricoPedidos()
    mostraTodasFaturas()
}


function trataFatura() {
    document.querySelector("#tblPedido").style.display = "none"
    document.getElementById("numero_pedidos").innerHTML = 0
    document.getElementById("numero_pedidos").style.display = "none";
    document.getElementById('quantidade_hamburguer_g_l').innerHTML = 0;
    document.getElementById('quantidade_massa_tinta_choco').innerHTML = 0;
    document.getElementById('quantidade_sumo_laranja').innerHTML = 0;
    document.getElementById('quantidade_agua').innerHTML = 0;
    document.getElementById('quantidade_coca_cola').innerHTML = 0;
    document.getElementById('quantidade_mousse').innerHTML = 0;
    document.getElementById('quantidade_salmao').innerHTML = 0;
    document.getElementById('quantidade_massa_tofu').innerHTML = 0;
    document.getElementById('quantidade_joao_pires').innerHTML = 0;
    document.getElementById('quantidade_papa_figos').innerHTML = 0;
    document.getElementById('quantidade_arroz_doce').innerHTML = 0;
    document.getElementById('quantidade_petit').innerHTML = 0;
    document.getElementById('quantidade_caipi').innerHTML = 0;
    document.getElementById('quantidade_daiquiri').innerHTML = 0;
    document.getElementById('quantidade_expresso').innerHTML = 0;
    document.getElementById('quantidade_cafe').innerHTML = 0;
    document.getElementById('quantidade_crostini').innerHTML = 0;
    document.getElementById('quantidade_tartaro').innerHTML = 0;
    document.getElementById('quantidade_saute').innerHTML = 0;
    document.getElementById('quantidade_red').innerHTML = 0;
    document.getElementById('quantidade_tarte').innerHTML = 0;
    document.getElementById('quantidade_pudim').innerHTML = 0;

    var date = new Date();
    var current_time = date.getHours() + ":" + date.getMinutes()
    var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()

    pedidos.push(document.getElementsByClassName("total")[0].innerHTML)
    pedidos.push(current_date + " " + current_time)

    elementosFaturas.push(pedidos)
    gravaHistoricoFaturas()
    document.getElementById("icon_img2").click()
    mostraTodasFaturas()
}


let ADD_pop
let btn_adicionar
let btn_cancel_adicionar
let text_cancel
let text_adiciona
let text_pop_add
let linha

function Juntar_pedido(t) {

    if (elem == null) {

        let text_pop_add = document.createTextNode("Pretende adicionar este item ao seu pedido?");


        let linha = document.createElement("p");
        linha.setAttribute("id", "texto_pop_add")

        let text_cancel = document.createTextNode("Cancelar");
        let text_adiciona = document.createTextNode("Adicionar");

        let ADD_pop = document.createElement("div");
        ADD_pop.setAttribute("id", "adiciona_ao_pedido")

        let btn_adicionar = document.createElement("button");
        btn_adicionar.setAttribute("id", "botao_adiciona")
        btn_adicionar.setAttribute("onclick", "fechar_pop('Chamar_empregado'), fechar_pop('Pop_WC'), destruir('adiciona_ao_pedido'), destruir('testa'), fechar_pop('Pop_ajuda')")
        btn_adicionar.addEventListener("click", add_pedido_fatura.bind(null, "card_faturas" + " " + t))
        

        let btn_cancel_adicionar = document.createElement("button");
        btn_cancel_adicionar.setAttribute("id", "botao_cancela_adiciona")
        btn_cancel_adicionar.addEventListener("click", function() {
            destruir('adiciona_ao_pedido')
        })


        btn_adicionar.appendChild(text_adiciona);
        btn_cancel_adicionar.appendChild(text_cancel);

        linha.appendChild(text_pop_add);
        ADD_pop.appendChild(linha);
        ADD_pop.appendChild(btn_adicionar);
        ADD_pop.appendChild(btn_cancel_adicionar);

        document.getElementById("adicionar_fatura").appendChild(ADD_pop);


    } else {
        var elem = document.getElementById('adiciona_ao_pedido');
        destruir('adiciona_ao_pedido')
        Juntar_pedido(t)
    }
}



let counter = 0

let ctr = 0

function mostraTodasFaturas() {
    faturas_lista.reverse()
    lista = document.querySelectorAll(".card_faturas")
    for (q = 0; q < lista.length; q++) {
        lista[q].remove();
    }

    for (let i = 0; i < faturas_lista.length; i++) {

        const ecra = document.getElementsByClassName("faturas_lista")

        const card = document.createElement("div");
        card.setAttribute("class", "card_faturas" + " " + i);

        ecra[0].appendChild(card)
        const titulo = document.createElement("div")
        titulo.setAttribute("class", "faturasTitulo")
        lista = ["Qnt.", "Descrição", "Valor"]
        for (let h = 0; h < 3; h++) {
            const elementoQnt = document.createElement("p")
            elementoQnt.textContent = lista[h]
            let classe = "titulo" + h
            elementoQnt.setAttribute("class", classe)
            titulo.appendChild(elementoQnt)
        }
        const hr = document.createElement("hr")
        hr.setAttribute("class", "hrFaturasTitulo")
        card.appendChild(titulo)
        card.appendChild(hr)
        for (let z = 0; z < faturas_lista[i].length - 2; z++) {

            const elementoLinha = document.createElement("div")
            for (let h = 0; h < 3; h++) {
                const elementoQnt = document.createElement("p")
                elementoQnt.textContent = faturas_lista[i][z][h].toString()
                elementoQnt.setAttribute("class", "elFatura" + h + " " + "p" + i + z)
                elementoLinha.appendChild(elementoQnt)


            }
            let classe = "hrFaturas hrFaturas" + z
            const hr = document.createElement("hr")
            hr.setAttribute("class", classe)
            card.appendChild(hr)
            elementoLinha.setAttribute("class", "divElmFatura" + " " + "l" + z)

            card.appendChild(elementoLinha)



            if (z == faturas_lista[i].length - 3) {

                const elemTotal = document.createElement("p")
                elemTotal.setAttribute("class", "p valorTotal")
                elemTotal.textContent = faturas_lista[i][z + 1]
                const elemTotalText = document.createElement("p")
                elemTotalText.setAttribute("class", "valorTotaltext")
                elemTotalText.textContent = "Total:"

                const nome = document.createElement("p");
                const contribuinte = document.createElement("p");
                const elemdata = document.createElement("p");
                elemdata.setAttribute("class", "p data");
                elemdata.textContent = "Data/hora :" + " " +
                    faturas_lista[i][z + 2]

                nome.setAttribute("class", "nome");
                contribuinte.setAttribute("class", "contribuinte");
                let div = document.createElement("div")
                div.setAttribute("class", "div_btn_faturas")
                const elemento = document.createElement("p")
                elemento.setAttribute("class", "btn_add")
                elemdata.setAttribute("onclick", "fechar_pop('Chamar_empregado'), fechar_pop('Pop_WC'), destruir('adiciona_ao_pedido'), destruir('testa'), fechar_pop('Pop_ajuda')")
                elemento.addEventListener("click", function() {
                    Juntar_pedido(i)
                });
                contribuinte.textContent = "Nº Contribuinte:" + document.getElementById("lname").value
                nome.textContent = "Nome:" + document.getElementById("fname").value
                card.appendChild(div)
                card.appendChild(elemTotal)
                card.appendChild(elemTotalText)
                card.appendChild(elemdata)
                card.appendChild(contribuinte)
                card.appendChild(nome)


                div.appendChild(elemento)

            }
        }



        counter = i + 1
    }

}
let contadorSobremesa = 0
let contadorPrato = 0
let contadorBebida = 0

function add_pedido_fatura(x) {

    numeroElFatura = document.getElementsByClassName(x)[0].children.length
    contador = 0
    elementosPedido = []
    for (y = 3; y < numeroElFatura - 5; y += 2) {
        let qnt = (document.getElementsByClassName(x)[0].children[y].children[0].innerHTML);
        let describe = (document.getElementsByClassName(x)[0].children[y].children[1].innerHTML);
        let preco = (document.getElementsByClassName(x)[0].children[y].children[2].innerHTML)
        elementosPedido.push([qnt, describe, preco, faturas_lista[x[13]][contador][3]])

        contador++
    }

    gravaHistoricoPedidos()
    mostraPedido()
    destruir('adiciona_ao_pedido')
    mostrar('ecra_pedidos')

    for (x = 0; x < pedidos.length; x++) {

        classe = pedidos[x][3]

        document.getElementById(classe).innerHTML = pedidos[x][0]

    }
    adicionar_pedido()
}

function eliminarItem(i) {

    let oldvalue = pedidos[i][0]


    document.getElementById(pedidos[i][3]).innerHTML = 0;
    totalElm = document.getElementById("numero_pedidos").innerHTML
    total = parseInt(totalElm) - parseInt(oldvalue)

    document.getElementById("numero_pedidos").innerHTML = total
    pedidos.splice(i, 1);



    var filtered = pedidos.filter(function(el) {
        return el != null;
    });
    elementosPedido = pedidos
    mostraTodasFaturas()
    gravaHistoricoPedidos()


    mostraPedido()




}
listaSobremesa = []

function randomSobremesa() {
    if (contadorSobremesa == 0) {
        let mainDiv = document.getElementById("randomSobremesa")
        let listaSobremesa = document.querySelectorAll(".sobremesa")
        let sobremesa = Math.floor(Math.random() * listaSobremesa.length);
        let classSobremesa = listaSobremesa[sobremesa].className

        let div = document.getElementsByClassName(classSobremesa)
        let clone = div[0].cloneNode(true)
        let valor = clone.className.replace("filterDiv", "cardRandom")
        clone.setAttribute("class", valor)



        let btn_random = document.createElement("div")
        btn_random.textContent = "Alterar"
        btn_random.setAttribute("class", "btn_random btn_sobremesa");
        btn_random.addEventListener("click", function() {
            randomSobremesaNext()
        })

        mainDiv.appendChild(btn_random)
        mainDiv.appendChild(clone)
        botao = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[1].childNodes[5];
        botao.addEventListener('click', function() {
            document.getElementsByClassName(valor)[0].childNodes[1].classList.toggle('is-flipped');
        });
        contadorSobremesa++
        backCard = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[3]
        backCard.setAttribute("class", "card card__face card__face--back cardRandomBack")
    }



}

function randomSobremesaNext() {

    let mainDiv = document.getElementById("randomSobremesa")
    let oldCard = document.getElementsByClassName("sobremesa cardRandom")
    oldCard[0].remove();
    let listaSobremesa = document.querySelectorAll(".sobremesa")
    let sobremesa = Math.floor(Math.random() * listaSobremesa.length);
    let classSobremesa = listaSobremesa[sobremesa].className

    let div = document.getElementsByClassName(classSobremesa)
    let clone = div[0].cloneNode(true)
    let valor = clone.className.replace("filterDiv", "cardRandom")
    clone.setAttribute("class", valor)

    mainDiv.appendChild(clone)
    botao = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[1].childNodes[5];
    botao.addEventListener('click', function() {
        document.getElementsByClassName(valor)[0].childNodes[1].classList.toggle('is-flipped');
    });
    backCard = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[3]
    backCard.setAttribute("class", "card card__face card__face--back cardRandomBack")


}

function randomPratoNext() {
    let mainDiv = document.getElementById("randomPrato")
    let oldCard = document.getElementsByClassName("prato cardRandom")
    oldCard[0].remove();
    let listaPrato = document.querySelectorAll(".prato")
    let prato = Math.floor(Math.random() * listaPrato.length);
    let classPrato = listaPrato[prato].className

    let div = document.getElementsByClassName(classPrato)
    let clone = div[0].cloneNode(true)
    let valor = clone.className.replace("filterDiv", "cardRandom")
    clone.setAttribute("class", valor)

    mainDiv.appendChild(clone)
    botao = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[1].childNodes[5];
    botao.addEventListener('click', function() {
        document.getElementsByClassName(valor)[0].childNodes[1].classList.toggle('is-flipped');
    });
    backCard = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[3]
    backCard.setAttribute("class", "card card__face card__face--back cardRandomBack")

}

function randomPrato() {
    if (contadorPrato == 0) {
        let mainDiv = document.getElementById("randomPrato")

        let listaPrato = document.querySelectorAll(".prato")
        let prato = Math.floor(Math.random() * listaPrato.length);
        let classPrato = listaPrato[prato].className

        let div = document.getElementsByClassName(classPrato)
        let clone = div[0].cloneNode(true)
        let valor = clone.className.replace("filterDiv", "cardRandom")
        clone.setAttribute("class", valor)
        let btn_random = document.createElement("div")
        btn_random.textContent = "Alterar"
        btn_random.setAttribute("class", "btn_random btn_prato");
        btn_random.addEventListener("click", function() {
            randomPratoNext()
        })
        mainDiv.appendChild(btn_random)
        mainDiv.appendChild(clone)
        contadorPrato++
        botao = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[1].childNodes[5];
        botao.addEventListener('click', function() {
            document.getElementsByClassName(valor)[0].childNodes[1].classList.toggle('is-flipped');
        });
        backCard = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[3]
        backCard.setAttribute("class", "card card__face card__face--back cardRandomBack")
    }
}


function randomBebidaNext() {
    let oldCard = document.getElementsByClassName("bebida cardRandom")
    oldCard[0].remove();
    let mainDiv = document.getElementById("randomBebida")

    let listaBebida = document.querySelectorAll(".bebida")

    let bebida = Math.floor(Math.random() * listaBebida.length);

    let classBebida = listaBebida[bebida].className

    let div = document.getElementsByClassName(classBebida)
    let clone = div[0].cloneNode(true)
    let valor = clone.className.replace("filterDiv", "cardRandom")
    clone.setAttribute("class", valor)

    mainDiv.appendChild(clone)
    botao = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[1].childNodes[5];
    botao.addEventListener('click', function() {
        document.getElementsByClassName(valor)[0].childNodes[1].classList.toggle('is-flipped');
    });
    backCard = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[3]
    backCard.setAttribute("class", "card card__face card__face--back cardRandomBack")
}

function randomBebida() {
    if (contadorBebida == 0) {
        let mainDiv = document.getElementById("randomBebida")

        let listaBebida = document.querySelectorAll(".bebida")
        let bebida = Math.floor(Math.random() * listaBebida.length);
        let classBebida = listaBebida[bebida].className
        let div = document.getElementsByClassName(classBebida)
        let clone = div[0].cloneNode(true)
        let valor = clone.className.replace("filterDiv", "cardRandom")
        clone.setAttribute("class", valor)



        let btn_random = document.createElement("div")
        btn_random.textContent = "Alterar"
        btn_random.setAttribute("class", "btn_random btn_bebida");
        btn_random.addEventListener("click", function() {
            randomBebidaNext()
        })
        mainDiv.appendChild(btn_random)

        mainDiv.appendChild(clone)
        botao = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[1].childNodes[5];
        botao.addEventListener('click', function() {
            document.getElementsByClassName(valor)[0].childNodes[1].classList.toggle('is-flipped');
        });
        backCard = document.getElementsByClassName(valor)[0].childNodes[1].childNodes[3]
        backCard.setAttribute("class", "card card__face card__face--back cardRandomBack")
        contadorBebida++


    }

}

const APAGAR = 'apagar_pedido';
const ALTERAR = 'alterar_pedido';
let buttonApagar
let buttonChange

function mostraPedido() {
    filterSelection("prato")
    if (elementosPedido.length == 0) {
        document.getElementById("numero_pedidos").style.display = "none";

    }

    carregaHistoricoPedidos()
    let tabelaAntiga = document.getElementById("tblPedido");





    // A nova tabela de histórico dos dados do utilizador tem o mesmo 
    // identificador da antiga, pois irá substituí-la na íntegra.
    let tabelaNova = document.createElement("table");
    tabelaNova.setAttribute("id", "tblPedido");

    // Linha de cabeçalho da tabela.
    let linhaTabela = document.createElement("tr");
    linhaTabela.setAttribute("class", "tbl_titulo" + "_" + i)
    linhaTabela.innerHTML = "<th class='col0 titleText'>Quantidade</th>" +
        "<th class=' col1 titleText'>Descrição</th>" +
        "<th class='col2 titleText'>Valor</th>"


    tabelaNova.appendChild(linhaTabela);



    conta = 0
        //_button.onclick = function()
    for (let i = 0; i < pedidos.length; i++) {


        valorTotalElm = 0
        valorTotalElm = (parseFloat(pedidos[i][0]) * parseFloat(pedidos[i][2])).toFixed(2)

        conta = parseFloat(conta) + parseFloat(valorTotalElm)
        linhaTabela = document.createElement("tr");
        linhaTabela.setAttribute("class", "tblElem tbl_linha" + "_" + i)

        linhaTabela.innerHTML =
            "<td class=' col col0'>" + pedidos[i][0] + "</td>" +
            "<td class='col1'>" + pedidos[i][1] + "</td>" +
            "<td class='valElm col2'" + ">" +
            valorTotalElm + " €" + "</td>" +
            "<td class='btnbtn col3'" + ">" + "</td>"

        tabelaNova.appendChild(linhaTabela);
        zonaBtn = document.getElementsByClassName("btnbtn")[0]
        btn_quantidade = document.getElementById("quant_teste")
        let clone1 = btn_quantidade.cloneNode(true)
        clone1.setAttribute("class", "testequant")
        clone1.setAttribute("id", "")
        linhaTabela.appendChild(clone1)




    }
    total = 0
    for (let i = 0; i < pedidos.length; i++) {
        total = total + document.getElementsByClassName("valELm")[0]

    }
    linhaTabela1 = document.createElement("tr");
    linhaTabela1.setAttribute("class", "tbl_total tbl_linha" + "_" + i)
    linhaTabela1.innerHTML =
        "<td>" + "  " + "</td>" +
        "<td>" + "Total:" + "</td>" +
        "<td class='total ' > " + conta.toFixed(2) + "€" + "</td>"

    linhaTabela1.setAttribute("class", "tblElem tbl_total")
    tabelaNova.appendChild(linhaTabela1);
    tabelaAntiga.parentNode.replaceChild(tabelaNova, tabelaAntiga);
    elementosPedido = []
    zonasBtn = document.querySelectorAll(".btnbtn")

    for (let i = 0; i < zonasBtn.length; i++) {

        let buttonApagar = document.createElement("div");
        buttonApagar.setAttribute("class", " btn_eliminar btn_eliminar_pedido" + "_" + i)
        buttonApagar.addEventListener("click", function() {
            testa_isso('eliminar', i)
        });

        let buttonChange = document.createElement("div");
        buttonChange.setAttribute("class", "  btn_buttonChange  btn_eliminar btn_eliminar_pedido" + "_" + i)
        buttonChange.addEventListener("click", function() {
            testa_isso('alterar', i)

        });

        zonasBtn[i].appendChild(buttonApagar);
        zonasBtn[i].appendChild(buttonChange);

    }

}


let confirmacao
let testezinho
let btn_confirmar
let btn_cancelar
let texto
let linha_txt2
let texto_cancela
let texto_confirma


function testa_isso(t, i) {
    var elem = document.getElementById('testa');
    if (elem == null) {


        let texto = document.createElement("p");
        texto.setAttribute("id", "texto_pdd")

        let texto_cancela = document.createTextNode("Cancelar");
        let texto_confirma = document.createTextNode("Confirmar");

        let btn_cancelar = document.createElement("button");
        btn_cancelar.setAttribute("id", "cancela_pdd")

        let btn_confirmar = document.createElement("button");
        btn_confirmar.setAttribute("id", "confirma_pdd")


        testezinho = document.createElement("div");
        testezinho.setAttribute("id", "testa")

        if (t == 'alterar') {
            let linha_txt2 = document.createTextNode("Tem a certeza que pretende alterar este item?")
            texto.appendChild(linha_txt2);


            btn_cancelar.setAttribute("onclick", "destruir('testa')")

            btn_confirmar.setAttribute("onclick", "mostrar('ecra_menu'), destruir('testa')")

            btn_confirmar.addEventListener("click", function() {

                let confirmacao = document.createElement("div")
                confirmacao.setAttribute("id", "invisivel")
                document.getElementById("merda").appendChild(confirmacao);
                if (document.getElementById('invisivel') != null) {
                    eliminarItem(i)
                    mostrar('ecra_menu');
                }
            })

        } else if (t == 'eliminar') {
            let linha_txt2 = document.createTextNode("Tem a certeza que pretende eliminar este item?")
            texto.appendChild(linha_txt2);


            btn_cancelar.setAttribute("onclick", "destruir('testa')")

            btn_confirmar.setAttribute("onclick", "destruir('testa')")
            btn_confirmar.setAttribute("id", "confirma_pdd")

            btn_confirmar.addEventListener("click", function() {
                let confirmacao = document.createElement("div")
                confirmacao.setAttribute("id", "invisivel")
                document.getElementById("merda").appendChild(confirmacao);
                if (document.getElementById('invisivel') != null) {
                    eliminarItem(i)
                }
            })

        }

        btn_confirmar.appendChild(texto_confirma);
        btn_cancelar.appendChild(texto_cancela);

        testezinho.appendChild(btn_cancelar);
        testezinho.appendChild(btn_confirmar);
        testezinho.appendChild(texto);

        document.getElementById("merda").appendChild(testezinho)

    } else {
        destruir('testa')
        testa_isso(t)
    }

}

function destruir(x) {
    if (document.getElementById(x) != null) {
        document.getElementById(x).remove();
    }

}




function gravaHistoricoFaturas() {

    // Converte o objeto que representa o histórico de encomendas para texto em
    // formato JSON (JavaScript Object Notation), e guardado-o em local storage
    // do browser.
    localStorage.setItem(ITEM_FATURAS, JSON.stringify(elementosFaturas));
}







function gravaHistoricoPedidos() {

    // Converte o objeto que representa o histórico de encomendas para texto em
    // formato JSON (JavaScript Object Notation), e guardado-o em local storage
    // do browser.
    localStorage.setItem(ITEM_PEDIDOS, JSON.stringify(elementosPedido));
}

function gravaFaturasNoHistorico(elementosFaturas) {

    faturas.push(elementosFaturas);
    gravaHistoricoFaturas();
}

function gravaEncomendaNoHistorico(pedido) {

    pedidos.push(pedido);
    gravaHistoricoPedidos();
}
/**
 * Grava o histórico de encomendas no local storage do browser.
 */


function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");


    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter3");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function mostraFiltro(x) {
    if (x == "filtroBebida") {
        document.getElementById("filtersBebida").style.display = "block"
        document.getElementById("filtersSobremesa").style.display = "none"
        document.getElementById("filtersPrato").style.display = "none"

    }
    if (x == "filtroSobremesa") {
        document.getElementById("filtersSobremesa").style.display = "block"
        document.getElementById("filtersPrato").style.display = "none"
        document.getElementById("filtersBebida").style.display = "none"
    }
    if (x == 'filtroPrato') {
        document.getElementById('filtersPrato').style.display = "block"
        document.getElementById("filtersSobremesa").style.display = "none"
        document.getElementById("filtersBebida").style.display = "none"
    }






}
/*------------------------------------------------------------------------------------------------------------------------------------*/
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
const RED = "quantidade_red"
const TARTE = "quantidade_pudim"
const PUDIM = "quantidade_tarte"




function somar(x) {
    document.getElementById(x).style.color = "black";
    document.getElementById(x).innerHTML = 1 + parseInt(document.getElementById(x).innerHTML);
}

/*  função verifica as quantidades de comida que são adicionadas no menu, soma tudo e altera o pop up dos pedidos automaticamente*/

const Comida_menu = [PUDIM, TARTE, HAMBURGUER, CROSTINI, SAUTE, AGUA, TARTARO, SUMO_LARANJA, COCA_COLA, MASSA_T_C, DAIQUIRI, MOUSSE, CAIPI, SALMAO, TOFU, VINHO_BRANCO, CAFE, VINHO_TINTO, EXPRESSO, ARROZ_DOCE, PETIT, RED];

function adicionar_pedido() {


    var total = 0;
    for (let i = 0; i < Comida_menu.length; i++) {
        total = total + parseInt(document.getElementById(Comida_menu[i]).innerHTML)
    }
    if (total > 0) {
        document.getElementById("btn_verPedido").style.display = "block";

    }
    document.getElementById("numero_pedidos").innerHTML = (total).toString();
    document.getElementById("numero_pedidos").style.display = "block";
}

/* Esta função recebe um id e reduz 1 */

function tirar_pedido(x) {





    if (document.getElementById(x).innerHTML == 0) {
        document.getElementById(x).style.color = "red";




    } else {
        document.getElementById(x).style.color = "black";
        if (document.getElementById(x).innerHTML != '0') {

            var total = parseInt(document.getElementById("numero_pedidos").innerHTML);
            total--;
            document.getElementById(x).innerHTML = parseInt(document.getElementById(x).innerHTML) - 1;
            document.getElementById("numero_pedidos").innerHTML = (total).toString();
            document.getElementById("numero_pedidos").style.display = "block";

            if (parseInt(document.getElementById("numero_pedidos").innerHTML) < 1) {
                document.getElementById("numero_pedidos").style.display = "none";
            }
        }

    }
    if (total == 0) {
        document.getElementById("btn_verPedido").style.display = "none";

    }

}

var counterColorBebida = 0
var counterColorPrato = 0
var counterColorSobremesa = 0


function changeColor(x) {

    if (x == "bebida") {
        if (counterColorBebida == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('prato').style.backgroundColor = 'beige';
            document.getElementById('sobremesa').style.backgroundColor = 'beige';
            counterColorPrato = 0
            counterColorSobremesa = 0
            counterColorBebida = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorBebida = 0
        }
    }
    if (x == "prato") {

        if (counterColorPrato == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('bebida').style.backgroundColor = 'beige';
            document.getElementById('sobremesa').style.backgroundColor = 'beige';
            counterColorSobremesa = 0
            counterColorBebida = 0
            counterColorPrato = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorPrato = 0
        }
    }
    if (x == "sobremesa") {
        if (counterColorSobremesa == 0) {
            document.getElementById('prato').style.backgroundColor = 'beige';
            document.getElementById('bebida').style.backgroundColor = 'beige';

            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            counterColorBebida = 0
            counterColorPrato = 0
            counterColorSobremesa = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorSobremesa = 0
        }
    }
}
var counterColorGrao = 0
var counterColorPeixe = 0
var counterColorcamarao = 0
var counterColorMassas = 0
var counterColorVegetais = 0
var counterColorMarisco = 0
var counterColorFrutosSecos = 0
var counterColorGulten = 0
var counterColorLactose = 0

function changeColorPrato(x) {

    if (x == "grao") {
        if (counterColorGrao == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';
            document.getElementById('vegetais').style.backgroundColor = 'beige';

            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorMassas = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorGrao = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorBebida = 0
        }
    }
    if (x == "peixe") {
        if (counterColorPeixe == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';
            document.getElementById('vegetais').style.backgroundColor = 'beige';

            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorCamarao = 0
            counterColorMassas = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorPeixe = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorPeixe = 0
        }
    }
    if (x == "camarao") {
        if (counterColorCamarao == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';
            document.getElementById('vegetais').style.backgroundColor = 'beige';

            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorMassas = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorCamarao = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorCamarao = 0
        }
    }
    if (x == "massas") {
        if (counterColorMassas == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('vegetais').style.backgroundColor = 'beige';

            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorMassas = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorMassas = 0
        }
    }
    if (x == "vegetais") {
        if (counterColorVegetais == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';

            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorVegetais = 1
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorMassas = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorVegetais = 0
        }
    }
    if (x == "marisco") {
        if (counterColorMarisco == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';

            document.getElementById('vegetais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorVegetais = 0
            counterColorMarisco = 1
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorMassas = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorMarisco = 0
        }
    }
    if (x == "frutosSecos") {
        if (counterColorFrutosSecos == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';

            document.getElementById('vegetais').style.backgroundColor = 'beige';
            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 1
            counterColorGulten = 0
            counterColorLactose = 0
            counterColorMassas = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorFrutosSecos = 0
        }
    }
    if (x == "gluten") {
        if (counterColorGulten == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';

            document.getElementById('vegetais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('lactose').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 1
            counterColorLactose = 0
            counterColorMassas = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorGulten = 0
        }
    }
    if (x == "lactose") {
        if (counterColorLactose == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('grao').style.backgroundColor = 'beige';
            document.getElementById('peixe').style.backgroundColor = 'beige';
            document.getElementById('camarao').style.backgroundColor = 'beige';
            document.getElementById('massas').style.backgroundColor = 'beige';

            document.getElementById('vegetais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecos').style.backgroundColor = 'beige';
            document.getElementById('marisco').style.backgroundColor = 'beige';
            document.getElementById('gluten').style.backgroundColor = 'beige';
            counterColorGrao = 0
            counterColorPeixe = 0
            counterColorCamarao = 0
            counterColorVegetais = 0
            counterColorMarisco = 0
            counterColorFrutosSecos = 0
            counterColorGulten = 0
            counterColorLactose = 1
            counterColorMassas = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorLactose = 0
        }
    }
}
counterColorChocolate = 0
counterColorDocesTradicionais = 0
counterColorFrutosSecosSobremesas = 0
counterColorGlutenSobremsa = 0
counterColorLactoseSobremesa = 0
counterColorglutemLactoseSobremesa = 0

function changeColorSobremsa(x) {
    if (x == "chocolate") {
        if (counterColorChocolate == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('docesTradicionais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecosSobremesas').style.backgroundColor = 'beige';
            document.getElementById('glutenSobremsa').style.backgroundColor = 'beige';
            document.getElementById('lactoseSobremesa').style.backgroundColor = 'beige';
            document.getElementById('glutemLactoseSobremesa').style.backgroundColor = 'beige';
            counterColorChocolate = 1
            counterColorDocesTradicionais = 0
            counterColorFrutosSecosSobremesas = 0
            counterColorGlutenSobremsa = 0
            counterColorLactoseSobremesa = 0
            counterColorglutemLactoseSobremesa = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorChocolate = 0
        }
    }
    if (x == "docesTradicionais") {
        if (counterColorDocesTradicionais == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('chocolate').style.backgroundColor = 'beige';
            document.getElementById('frutosSecosSobremesas').style.backgroundColor = 'beige';
            document.getElementById('glutenSobremsa').style.backgroundColor = 'beige';
            document.getElementById('lactoseSobremesa').style.backgroundColor = 'beige';
            document.getElementById('glutemLactoseSobremesa').style.backgroundColor = 'beige';
            counterColorChocolate = 0
            counterColorDocesTradicionais = 1
            counterColorFrutosSecosSobremesas = 0
            counterColorGlutenSobremsa = 0
            counterColorLactoseSobremesa = 0
            counterColorglutemLactoseSobremesa = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorDocesTradicionais = 0
        }
    }
    if (x == "frutosSecosSobremesas") {
        if (counterColorFrutosSecosSobremesas == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('chocolate').style.backgroundColor = 'beige';
            document.getElementById('docesTradicionais').style.backgroundColor = 'beige';
            document.getElementById('glutenSobremsa').style.backgroundColor = 'beige';
            document.getElementById('lactoseSobremesa').style.backgroundColor = 'beige';
            document.getElementById('glutemLactoseSobremesa').style.backgroundColor = 'beige';
            counterColorChocolate = 0
            counterColorDocesTradicionais = 0
            counterColorFrutosSecosSobremesas = 1
            counterColorGlutenSobremsa = 0
            counterColorLactoseSobremesa = 0
            counterColorglutemLactoseSobremesa = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorFrutosSecosSobremesas = 0
        }
    }
    if (x == "glutenSobremsa") {
        if (counterColorGlutenSobremsa == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('chocolate').style.backgroundColor = 'beige';
            document.getElementById('docesTradicionais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecosSobremesas').style.backgroundColor = 'beige';
            document.getElementById('lactoseSobremesa').style.backgroundColor = 'beige';
            document.getElementById('glutemLactoseSobremesa').style.backgroundColor = 'beige';
            counterColorChocolate = 0
            counterColorDocesTradicionais = 0
            counterColorFrutosSecosSobremesas = 0
            counterColorGlutenSobremsa = 1
            counterColorLactoseSobremesa = 0
            counterColorglutemLactoseSobremesa = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorGlutenSobremsa = 0
        }
    }
    if (x == "lactoseSobremesa") {
        if (counterColorLactoseSobremesa == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('chocolate').style.backgroundColor = 'beige';
            document.getElementById('docesTradicionais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecosSobremesas').style.backgroundColor = 'beige';
            document.getElementById('glutenSobremsa').style.backgroundColor = 'beige';
            document.getElementById('glutemLactoseSobremesa').style.backgroundColor = 'beige';
            counterColorChocolate = 0
            counterColorDocesTradicionais = 0
            counterColorFrutosSecosSobremesas = 0
            counterColorGlutenSobremsa = 0
            counterColorLactoseSobremesa = 1
            counterColorglutemLactoseSobremesa = 0
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorLactoseSobremesa = 0
        }
    }
    if (x == "glutemLactoseSobremesa") {
        if (counterColorglutemLactoseSobremesa == 0) {
            document.getElementById(x).style.backgroundColor = ' #c4bb8cad';
            document.getElementById('chocolate').style.backgroundColor = 'beige';
            document.getElementById('docesTradicionais').style.backgroundColor = 'beige';
            document.getElementById('frutosSecosSobremesas').style.backgroundColor = 'beige';
            document.getElementById('glutenSobremsa').style.backgroundColor = 'beige';
            document.getElementById('lactoseSobremesa').style.backgroundColor = 'beige';
            counterColorChocolate = 0
            counterColorDocesTradicionais = 0
            counterColorFrutosSecosSobremesas = 0
            counterColorGlutenSobremsa = 0
            counterColorLactoseSobremesa = 0
            counterColorglutemLactoseSobremesa = 1
        } else {

            document.getElementById(x).style.backgroundColor = 'beige';
            counterColorglutemLactoseSobremesa = 0
        }
    }
}