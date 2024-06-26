/** Identificador do botão para iniciar a app */
const BOTAO_START = "btnStart";
const BOTAO_VOLTAR = "btnBack";
const BOTAO_PERSONA1 = "btnPersona1";
const BOTAO_PERSONA2 = "btnPersona2";
const BOTAO_PERSONA3 = "btnPersona3";



window.addEventListener("load", principal);
window.addEventListener("load", defineEventHandlersParaElementosHTML);
/**
 * Primeira função a ser executada após o browser completar o carregamento
 * de toda a informação presente no documento HTML.
 */
function principal() {
    console.log("...")
    


    // Associar comportamento a elementos na página HTML.

}
/**
 * Associa event handlers a elementos no documento HTML, em particular botões.
 * Com esta abordagem, evitam-se atributos onclick ou similares, e faz-se uma
 * melhor separação entre conteúdo, em HTML, e comportamento, em JavaScript.
 */
function defineEventHandlersParaElementosHTML() {
    console.log("entrou")
    document.getElementById(BOTAO_START);
    addEventListener("click", appStart);



    document.getElementById(BOTAO_PERSONA1);
    addEventListener("click", principal);

    document.getElementById(BOTAO_PERSONA2);
    addEventListener("click", principal);

    document.getElementById(BOTAO_PERSONA3);
    addEventListener("click", appStart);






}

function appStart() {


    document.querySelector("#pageTwo").style.display = "block";

    document.querySelector("#pageOne").style.display = "none";

    document.getElementById(BOTAO_VOLTAR);
    addEventListener("click", voltar);

}