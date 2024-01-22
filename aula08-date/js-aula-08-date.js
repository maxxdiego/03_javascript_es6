// Criando uma instância da classe Date do Javascript para utilizar seus métodos
const dataAtual = new Date()
console.log(typeof(dataAtual))
console.log()

// Pegando o dia atual
const dia = dataAtual.getDate()
console.log(dia)

// Pegando o mês atual
const mês = dataAtual.getMonth()+1
console.log(mês)

// Pegando o ano atual
const ano = dataAtual.getFullYear()
console.log(ano)

console.log()
console.log(`Hoje é ${dia}/${mês}/${ano}.`)
console.log()