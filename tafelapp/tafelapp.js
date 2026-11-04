let tafelInput = document.getElementById("inputTafel");
let somTekst = document.getElementById("som");
let antwoordInput = document.getElementById("antwoord");
let feedbackTekst = document.getElementById("feedback");
let scoreTekst = document.getElementById("score");
let tijdTekst = document.getElementById("tijd");

let getal1 = 0;
let getal2 = 0;
let score = 0;
let seconden = 0;
let timerInterval = null;

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () { 
        seconden = seconden + 1;

        let minute = Math.floor(seconden / 60);
        let restSeconden = seconden % 60;

        tijdTekst.textContent =
        String(minute).padStart(2, "0") + ":" + String(restSeconden).padStart(2, "0");
    }, 1000);
}

function startOefenen() {
    let tafel = Number(tafelInput.value);

    if (tafel < 1 || tafel > 100 || tafelInput.value === "") {
        feedbackTekst.textContent = "Vul een tafel in van 1 tot 100.";
        return;
    }
    startTimer();
    getal1 = Math.floor(Math.random() * 10) + 1;
    getal2 = tafel;

    somTekst.textContent = getal1 + " x " + getal2 + " =";
    antwoordInput.value = "";
    feedbackTekst.textContent = "";
}

function controleerAntwoord() {
    if (somTekst.textContent === "Kies een tafel en klik op GO!") {
        feedbackTekst.textContent = "Klik eerst op GO!";
        return;
    }

    if (antwoordInput.value === "") {
        feedbackTekst.textContent = "Vul eerst een antwoord in.";
        return;
    }

    let antwoord = Number(antwoordInput.value);
    let uitkomst = getal1 * getal2;

    if (antwoord === uitkomst) {
        score = score + 1;
        scoreTekst.textContent = score;

        feedbackTekst.textContent = "Goed!";

        setTimeout(startOefenen, 700);
    } else {
        feedbackTekst.textContent = "Fout, probeer opnieuw.";
    }
}