window.onload = function() {
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementsByClassName("numberPlace")[0],

        number = 0, /// number value
        min = 0, /// min number
        max = 30;

    minusBtn.onclick = function() {
        if (number > min) {
            number = number - 1; /// Minus 1 of the number
            numberPlace.innerText = number; /// Display the value in place of the number

        }
        if (number == min) {
            numberPlace.style.color = "red";
            setTimeout(function() { numberPlace.style.color = "black" }, 500)
        } else {
            numberPlace.style.color = "black";
        }

    }
    plusBtn.onclick = function() {
        console.log(number)
        if (number < max) {
            number = number + 1;
            console.log(numberPlace)

            numberPlace.innerText = number; /// Display the value in place of the number
        }
        if (number == max) {
            numberPlace.style.color = "red";
            setTimeout(function() { numberPlace.style.color = "black" }, 500)
        } else {
            numberPlace.style.color = "black";

        }
    }
}