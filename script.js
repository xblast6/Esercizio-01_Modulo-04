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
        document.getElementById("rispostaEs5").innerText = sommaArray
        document.getElementById("inputNumEs5").value = ""
    })
}