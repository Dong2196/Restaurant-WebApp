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
    console.log(x)
    console.log("entrou")
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
        if (counterColorPeixe == 0) {
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
        if (counterColorPeixe == 0) {
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
        if (counterColorPeixe == 0) {
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
        if (counterColorPeixe == 0) {
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
        if (counterColorPeixe == 0) {
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
        if (counterColorPeixe == 0) {
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
        if (counterColorPeixe == 0) {
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