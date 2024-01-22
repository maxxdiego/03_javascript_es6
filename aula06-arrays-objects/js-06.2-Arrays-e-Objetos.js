// ARRAYS (VETOR OU LISTA)

let produto = "Computador"
console.log(typeof(produto))
let produtos = []
console.log(typeof(produtos))

console.log()
let Produtos = ['Computador', 'Notebook', 'Celular', 'Tablet']
console.log(Produtos)

console.log()
console.log("Exibindo sem loop:")
console.log(Produtos[0])
console.log(Produtos[1])
console.log(Produtos[2])
console.log(Produtos[3])

console.log()
console.log("Exibindo no for com os índices:")
for (let c in Produtos) {
    console.log(`${c} - ${Produtos[c]}`)
}

console.log()
// console.log("Exibindo no forEach:")
// Produtos.forEach(function(produto, i){
//     console.log(i, produto)
// })
console.log("Exibindo no forEach:")
Produtos.forEach(produto => {
    console.log(produto)
})


// OBJETOS LITERAIS
const product = {}
console.log()
console.log(typeof(product))

const Product = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho."
}
console.log()
console.log(Product)

console.log()
console.log(Product[0])

console.log()
console.log(Product.nome, Product.marca, Product.preco, Product.descricao)

console.log()
console.log(`O ${Product.nome} da marca ${Product.marca}, custa apenas ${Product.preco}. ${Product.descricao}`)


// ARRAY DE OBJETOS
const pList = [{}]
console.log()
console.log(typeof(pList))

const productList = [{
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho."
},
{
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento."
},
{
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente."
}
]

console.log()
console.log(productList)

console.log()

// EXIBINDO ARRAY DE OBJETOS COM FOREACH
productList.forEach(product => {
    console.log(`Produto: ${product.nome}`)
    console.log(`Marca: ${product.marca}`)
    console.log(`Preço: ${product.preco}`)
    console.log(`Descrição: ${product.descricao}`)
    console.log()
})