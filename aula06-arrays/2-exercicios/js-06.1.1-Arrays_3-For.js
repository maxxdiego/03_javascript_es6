/* 
let num = []

for (c=0; c<=5; c++) {
    num.push(c)
    console.log(`Nosso vetor é ${num}`)
}
*/

console.log(`Exibindo sem for:`)
var cor = ['Vermelho', 'Azul', 'Amarelo']
console.log(cor[0])
console.log(cor[1])
console.log(cor[2])

console.log(`Exibindo com for:`)
let cores = ['Vermelho', 'Azul', 'Amarelo']
for (c=0; c<cores.length; c++) {
    console.log(cores[c])
    //console.log(`A posição ${c} do vetor tem o valor ${cores[c]}`)
}


