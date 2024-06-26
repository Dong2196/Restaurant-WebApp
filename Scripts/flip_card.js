let cards = document.querySelectorAll('.flipCard');
let cardsBack = document.querySelectorAll('.card__face--back');

function flip() {


    for (let x = 0; x < cards.length; x++) {
        mainCard = document.getElementsByClassName("card")[x]
        let infobtn = document.createElement("div")
        let classe = "infoBtn infoBtnCss btnflipfront" + x

        infobtn.setAttribute("class", classe)
        infobtn.addEventListener('click', function() {
            cards[x].classList.toggle('is-flipped');
        });
        mainCard.appendChild(infobtn)
    }

    for (let x = 0; x < cards.length; x++) {
        let classe1 = "infoBtn infoBtnCss btnflipfront" + x.toString()
        console.log(classe1)
        mainCard = document.getElementsByClassName("card__face--back")[x]
        let infobtnback = document.createElement("div")
        infobtnback.setAttribute("class", "infoBtn infoBtnCss btnflipback")
        console.log(classe1)
        infobtnback.addEventListener('click', click(null, classe1));
        mainCard.appendChild(infobtnback)
    }
}

function click(classe) {
    console.log(classe)

}