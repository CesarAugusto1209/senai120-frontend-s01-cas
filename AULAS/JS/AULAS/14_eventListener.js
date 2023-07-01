const valorInput1 = document.getElementById("valor1"),
    valorInput2 = document.getElementById("valor2"),
    botaoCalcula = document.getElementById("btnsomar"),
    resultado = document.getElementById("resultado");

function somar() {
    let valor1 = Number(valorInput1.value),
        valor2 = Number(valorInput2.value);

    resultado.innerHTML = valor1 + valor2
}

botaoCalcula.addEventListener("dblclick", () => {
    let valor1 = Number(valorInput1.value),
        valor2 = Number(valorInput2.value);

        resultado.innerHTML = valor1 + valor2;
})