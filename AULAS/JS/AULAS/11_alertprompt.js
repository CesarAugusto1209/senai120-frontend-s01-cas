let nome = prompt("Digite seu nome")
alert("Olá" + nome + ", seja bem vindo")

let n1 = number(prompt("Digite o 1° número"))
let n2 = number(prompt("Digite o 2 °número"))

alert(n1 + n2)

let digiteSenha = prompt("digite senha")
let senha = "1234"

while (senha != digiteSenha) {
    digiteSenha = prompt("Digite a senha novamente")
}