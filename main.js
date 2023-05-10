// 1. a)
pessoa = {
    nome: prompt("Qual o seu nome?"),
    apelidos: [prompt("Diga um apelido"),
    prompt("Diga outro apelido"),
    prompt("Diga mais um apelido")]
}

function imprimeApelidos(pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

imprimeApelidos(pessoa)

// 1. b)
pessoa2 = {
    ...pessoa.nome,
    apelidos: [prompt("Diga um apelido"),
    prompt("Diga outro apelido"),
    prompt("Diga mais um apelido")]
}

imprimeApelidos(pessoa2)

// 2. a)
humano = {
    nome: prompt("Nome"),
    idade: prompt("Idade"),
    profissão: prompt("Profissão")
}

humano2 = {
    nome: prompt("Nome"),
    idade: prompt("Idade"),
    profissão: prompt("Profissão")
}
infos
// 2. b)
function infos(o){
    return [o.nome, o.nome.length, o.idade, o.profissão, o.profissão.length]
}

// 3. a)
carrinho = []

// 3. b)
fruta1 = {
    nome: "maçã",
    disponibilidade: true
}

fruta2 = {
    nome: "banana",
    disponibilidade: true
}

fruta3 = {
    nome: "uva",
    disponibilidade: true
}


// 3. c)
function botarNoCarrinho(fruta){
    carrinho.push(fruta)
}

botarNoCarrinho(fruta1)
botarNoCarrinho(fruta2)
botarNoCarrinho(fruta3)

// 3. d)
if(carrinho.length = 3){
    console.log(carrinho)
}else{
    console.log("O carrinho não tem 3 itens!")
}