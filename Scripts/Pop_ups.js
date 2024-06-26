function abrir_pop(x) {
    document.getElementById(x).style.display = "flex";
}

function fechar_pop(x) {
    console.log(x);
    document.getElementById(x).style.display = "none";
}

function abrir_pop2(x) {
    if (document.getElementById(x).style.display == "flex") {
        document.getElementById(x).style.display = "none";
    } else {
        document.getElementById(x).style.display = "flex";
    }
}

function aparece_notificacao(x) {
    document.getElementById(x).style.display = "flex";
    setTimeout(() => {
        const box = document.getElementById(x);

        // 👇️ removes element from DOM
        box.style.display = 'none';

        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
    }, 6000); // 👈️ time in milliseconds
}

const SENHA_ATUAL = 0;
const NUMERO_SENHA_ATUAL = 'senha_atual';
const NUMERO_SENHA_CLIENTE = 'senha_cliente';
const NOTIFICACAO_DO_WC = 'notificacao_da_senha';



function notificacao_senha() {
    if (parseInt(document.getElementById(NUMERO_SENHA_ATUAL).innerHTML) == parseInt(document.getElementById(NUMERO_SENHA_CLIENTE).innerHTML)) {
        aparece_notificacao(NOTIFICACAO_DO_WC);
        document.getElementById(NUMERO_SENHA_CLIENTE).innerHTML = parseInt(document.getElementById(NUMERO_SENHA_CLIENTE).innerHTML) + 5;
        fechar_pop('Pop_WC');
        fechar_pop('texto_senha');
        if (parseInt(document.getElementById(NUMERO_SENHA_ATUAL).innerHTML) == 100) {
            document.getElementById(NUMERO_SENHA_ATUAL).innerHTML = 0;
            document.getElementById(NUMERO_SENHA_CLIENTE).innerHTML = 5;
        }
    }
}

function carrega_no_btn(x) {
    document.getElementById(x).click()
}



