var carros = ['Gol', 'Pálio', 'Uno']

carros[3] = 'Chevette'
carros.push('Monza')
carros.sort() // Ordenar

// for (let i=0; i<carros.length; i++) {
//     console.log(carros[i])
// }

// Forma melhor de fazer o for
for (let i in carros)
    console.log(carros[i])

console.log('--------')

// É possível declarar um array somente reservando os indices
let teste = [ , , , ]
console.log(teste)