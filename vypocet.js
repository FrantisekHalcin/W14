let history = JSON.parse(localStorage.getItem("pamat"));
let vysledok;
let vysledokStr;
let operator;

if (history == null) {
    history = [];
}

let zobrazenie = document.getElementById("last5");


for (let i = 0; i < history.length; i++) {

    let p = document.createElement("p");

    p.innerText = history[i];

    zobrazenie.append(p);
}

function vypocitaj() {

    let cislo1 = parseFloat(document.getElementById("cislo1").value);

    let cislo2 = parseFloat(document.getElementById("cislo2").value);

    let operacia = document.getElementById("operacia").value;

    switch (operacia) {
        case "plus":
            vysledok = cislo1 + cislo2;
            operator = " + ";
            break;
        case "minus":
            vysledok = cislo1 - cislo2;
            operator = " - ";
            break;
        case "multiply":
            vysledok = cislo1 * cislo2;
            operator = " * ";
            break;
        case "divide":
            vysledok = cislo1 / cislo2;
            operator = " / ";
            break;
    }

    document.getElementById("vysledok").value = vysledok;
    vysledokStr = cislo1 + operator + cislo2 + " = " + vysledok;


    let p = document.createElement("p");

    p.innerText = cislo1 + operator + cislo2 + " = " + vysledok;

    zobrazenie.prepend(p);

    history.unshift(vysledokStr);

    if (history.length > 5) {
        history.pop();
        zobrazenie.removeChild(zobrazenie.lastElementChild);
    }

    localStorage.setItem("pamat", JSON.stringify(history));
}

