function soma (n1, n2) {
    return n1 + n2
}

let resultado = soma(4, 5)
console.log(resultado)

// Definindo valores padões caso não informado
function soma2 (n1=0, n2=0) {
    return n1 + n2
}

let resultado2 = soma2(4)
console.log(resultado2)

// Uma função pode ser atribuida a uma variável
let dobro = function(x) {
    return x*2
}

console.log(dobro(3))