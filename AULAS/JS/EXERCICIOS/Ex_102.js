var n1 = prompt ("digite um numero")

function numeroParouImpar(n1) {
    var resposta = ""
    if (n1 %2 ==0) {
        resposta = "numero par"
    }

    else {
        resposta = "numero impar";
    }
    return resposta;
}

alert (numeroParouImpar (n1))