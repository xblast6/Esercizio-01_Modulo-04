//ESERCIZIO 01
function controlla50(num1, num2) {
    let risultatoEs1 = document.getElementById("rispostaEs1"); 
    if (num1 === 50 || num2 === 50) {
        risultatoEs1.innerText = "True"; 
        console.log(risultatoEs1);
    } else if (num1 + num2 === 50) {  
        risultatoEs1.innerText = "True";
        console.log(risultatoEs1);
    } else {
        risultatoEs1.innerText = "False";
        console.log(risultatoEs1);  
    }
}

document.getElementById("btnEs1").addEventListener("click", function() {
    let num1 = parseInt(document.getElementById("inputNum1").value);
    let num2 = parseInt(document.getElementById("inputNum2").value); 
    controlla50(num1, num2);
    document.getElementById("inputNum1").value = ""
    document.getElementById("inputNum2").value = ""
});
//ESERCIZIO 02

function rimuoviCarattere(frase, posizione) {
    posizione = parseInt(posizione)
    if (posizione < 0 || posizione > frase.length) {
       document.getElementById("rispostaEs2").innerText = "Inserisci una posizione valida."
       return
    }
    let risultatoEs2 = frase.slice(0, posizione) + frase.slice(posizione + 1);
    document.getElementById("rispostaEs2").innerText = risultatoEs2;
    console.log(risultatoEs2);
    
}

document.getElementById("btnEs2").addEventListener("click", function() {
    let frase = document.getElementById("inputTextEs2").value
    let posizione = parseInt(document.getElementById("inputNumEs2").value)
    rimuoviCarattere(frase, posizione)
    document.getElementById("inputTextEs2").value = ""
    document.getElementById("inputNumEs2").value = ""
})
//ESERCIZIO 03

function controllaIntervallo(x, y) {
    if (((x >= 40 && x <= 60) && (y >= 40 && y <= 60))  || ((x >= 70 && x <= 100) && (y >= 70 && y <= 100))) {
        document.getElementById("rispostaEs3").innerText = "True"
    } else {
        document.getElementById("rispostaEs3").innerText = "False"
    }
}

document.getElementById("btnEs3").addEventListener("click", function() {
    let x = parseInt(document.getElementById("inputNum1Es3").value)
    let y = parseInt(document.getElementById("inputNum2Es3").value)
    controllaIntervallo(x, y)
    document.getElementById("inputNum1Es3").value = ""
    document.getElementById("inputNum2Es3").value = ""
})

//ESERCIZIO 04
function nomeCittà(frase) {
    if (frase.toLowerCase().includes("los") || frase.toLowerCase().includes("new")) {
        document.getElementById("rispostaEs4").innerText = frase
    } else {
        document.getElementById("rispostaEs4").innerText = "False"
    }
}

document.getElementById("btnEs4").addEventListener("click", function() {
    let frase = document.getElementById("inputTextEs4").value
    nomeCittà(frase)
    document.getElementById("inputTextEs4").value = ""
})

//ESERCIZIO 05
let arrayEs5 = [];
function CalcolaSommaArray() {
    document.getElementById("btnEs5").addEventListener("click", function() {
        let nuovoElementoArray = parseInt(document.getElementById("inputNumEs5").value)
        arrayEs5.push(nuovoElementoArray)
        let sommaArray = 0
        for (let i = 0; i < arrayEs5.length; i++) {
            sommaArray += arrayEs5[i]
        }
        document.getElementById("risposta2Es5").innerText = "Array: [" + arrayEs5.join(", ") + "]";
        document.getElementById("rispostaEs5").innerText = "La somma è: " + sommaArray
        document.getElementById("inputNumEs5").value = ""
    })
}
CalcolaSommaArray()
//ESERCIZIO 06
let arrayEs6 = [5, 6, 10, 1, 20, 25]
function controllaArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            document.getElementById("rispostaEs6").innerText = "True"
            break
        } else {
            document.getElementById("rispostaEs6").innerText = "False"
        }
        
    }
    
}
controllaArray(arrayEs6)
//ESERCIZIO 07
function controllaAngolo(x) {
    if (x < 90) {
        document.getElementById("rispostaEs7").innerText = "Acuto"
        return;
    } else if (x === 90) {
        document.getElementById("rispostaEs7").innerText = "Retto"
        return;
    } else if (x > 90 && x < 180) {
        document.getElementById("rispostaEs7").innerText = "Ottuso"
        return;
    } else if (x === 180) {
        document.getElementById("rispostaEs7").innerText = "Piatto"
        return;
    }
}

document.getElementById("btnEs7").addEventListener("click", function() {
    let x = parseInt(document.getElementById("inputNumEs7").value)
    controllaAngolo(x)
    document.getElementById("inputNumEs7").value = ""
})

//ESERCIZIO 08
function creaAcronimo(frase) {
    let acronimo = []
    console.log(frase);
    let fraseSplit = frase.split(" ")
    console.log(fraseSplit);
    for (let i = 0; i < fraseSplit.length; i++) {
        let iniziale = fraseSplit[i].slice(0, 1)
        acronimo.push(iniziale)
        console.log(iniziale);
    }
    acronimo = acronimo.join("")
    document.getElementById("rispostaEs8").innerText = acronimo
}

document.getElementById("btnEs8").addEventListener("click", function() {
    let frase = document.getElementById("inputTextEs8").value
    creaAcronimo(frase)
    document.getElementById("inputTextEs8").value = ""
})

//ESERCIZIO 09
function trovaIlCaratterePiùUsato(frase) {
    let conteggio = {}
    let fraseSplit = frase.split("");
    for (let carattere of fraseSplit) {
        conteggio[carattere] = (conteggio[carattere] || 0) + 1;
    }
    console.log(conteggio);
    let massimo = 0;
    let caratterePiuUsato = null;
    for (let carattere in conteggio) { // Itera su tutte le chiavi dell'oggetto
        if (conteggio[carattere] > massimo) {
            massimo = conteggio[carattere];
            caratterePiuUsato = carattere;
        }
    }
    document.getElementById("rispostaEs9").innerText = "Il carattere più usato è: " + caratterePiuUsato + ". è stato usato :" + massimo +" volte"
}
document.getElementById("btnEs9").addEventListener("click", function() {
    let frase = document.getElementById("inputTextEs9").value
    trovaIlCaratterePiùUsato(frase)
    document.getElementById("inputTextEs9").value = ""
})

//ESERCIZIO 10
function controllaAnagramma(frase1, frase2) {
    let pulisciStringa = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let frase1Pulita = pulisciStringa(frase1)
    let frase2Pulita = pulisciStringa(frase2)
    /* console.log(frase1Pulita);
    console.log(frase2Pulita); */
    let frase1Split = frase1Pulita.split("")
    let frase2Split = frase2Pulita.split("")
    /* console.log(frase1Split);
    console.log(frase2Split); */
    let frase1OrdAlfabetico = frase1Split.sort()
    let frase2OrdAlfabetico = frase2Split.sort()
    /* console.log(frase1OrdAlfabetico);
    console.log(frase2OrdAlfabetico); */
    let risultato1 = frase1OrdAlfabetico.join("")
    let risultato2 = frase2OrdAlfabetico.join("")
    /* console.log(risultato1);
    console.log(risultato2); */
    if (risultato1 === risultato2) {
        document.getElementById("rispostaEs10").innerText = "Le due parole sono anagrammi"
    } else {
        document.getElementById("rispostaEs10").innerText = "Le due parole NON sono anagrammi"
    }
}

document.getElementById("btnEs10").addEventListener("click", function() {
    let frase1 = document.getElementById("inputText1Es10").value
    let frase2 = document.getElementById("inputText2Es10").value
    controllaAnagramma(frase1, frase2)
    document.getElementById("inputText1Es10").value = ""
    document.getElementById("inputText2Es10").value = ""
})

//ESERCIZIO 11
let listaAnagrammi = ["ostia" , "staio", "storia", "stoia", "tiaso", "ciao", "sole"]
let parolaAnagramma = "astio"
function aggiungiAnagrammi(array, parola) {
    let risultatoAnagramma = []
    let pulisciStringa = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let risultatoParola = pulisciStringa(parola).split("").sort().join("")
    console.log(risultatoParola);
    let parolaArray = ""
    let parolaAnagrammaGiusta = []
    let parolaAppoggio= ""
    for (let i = 0; i < listaAnagrammi.length; i++) {
        parolaAppoggio = listaAnagrammi[i]
        /* parolaAnagrammaGiusta.push(listaAnagrammi[i]) */
        parolaArray = pulisciStringa(listaAnagrammi[i]).split("").sort().join("")
        console.log(parolaArray);
        if (parolaArray === risultatoParola) {
            risultatoAnagramma.push(parolaAppoggio)
        }
    }
    document.getElementById("rispostaE11").innerText = risultatoAnagramma
}

document.getElementById("btnEs11").addEventListener("click", function() {
    aggiungiAnagrammi(listaAnagrammi, parolaAnagramma)

})

//ESERCIZIO 12
function controlloPalindromo(parola) {
    /* parolaSplit = parola.split("")
    console.log(parolaSplit); */
    parolaSplitReverse = parola.split("").reverse().join("")
    console.log(parolaSplitReverse);
    if (parola === parolaSplitReverse) {
        document.getElementById("rispostaEs12").innerText = "True"
    } else {
        document.getElementById("rispostaEs12").innerText = "False"
    }
}

document.getElementById("btnEs12").addEventListener("click", function() {
    let parola = document.getElementById("inputTextEs12").value
    controlloPalindromo(parola)
    document.getElementById("inputTextEs12").value = ""
})

//ESERCIZIO 13
function invertiNumeri(num) {
    let NumeroInLettere = num.toString()
    console.log(NumeroInLettere);
    numeroSplitReverseInLettere = NumeroInLettere.split("").reverse().join("")
    console.log(numeroSplitReverseInLettere);
    let numeroReverse = parseInt(numeroSplitReverseInLettere)
    document.getElementById("rispostaEs13").innerText = numeroReverse
}

document.getElementById("btnEs13").addEventListener("click", function() {
    let num = parseInt(document.getElementById("inputNumEs13").value)
    invertiNumeri(num)
    document.getElementById("inputNumEs13").value = ""
})

//ESERCIZIO 14
function creaScala(num) {
    let contenitore = document.getElementById("rispostaEs14");
    contenitore.innerHTML = ""; 

    for (let i = 1; i < num; i++) {
        contenitore.innerHTML += "#".repeat(i) + "<br>";
        console.log("#".repeat(i)); 
    }
}
document.getElementById("btnEs14").addEventListener("click", function() {
    let num = parseInt(document.getElementById("inputNumEs14").value)
    creaScala(num)
    document.getElementById("inputNumEs14").value = ""
})

//ESERCIZIO 15
function stringaReverse(parola) {
    let parolaReverse = parola.split("").reverse().join("")
    document.getElementById("rispostaEs15").innerText = parolaReverse 

}
document.getElementById("btnEs15").addEventListener("click", function() {
    let parola = document.getElementById("inputTextEs15").value
    stringaReverse(parola)
    document.getElementById("inputTextEs15").value = ""
})

//ESERCIZIO 16
let arrayEs16 = []
function creaSottoArray(array, num) {
    let sottoArray = []
    for (let i = 0; i < array.length; i++) {
        if (i < num) {
            sottoArray.push(array[i])
        }
    }
    document.getElementById("rispostaEs16").innerText = "L'array è :" + arrayEs16
    document.getElementById("risposta2Es16").innerText = "I sotto array sono :" + sottoArray
}

