let escolha = "email";
let escolha2 = "sobre nome";
let escolha3 = "nome";
let escolha4 = "idade";


const user = {
    nome: 'Camilly',
    email: 'camilly@email.com',
    idade: 18,
    "sobre nome": "Ferreira"
}

console.log(user.nome); //Camilly
console.log(user["nome"]) //Camilly

console.log(user["sobre nome"]) //Ferreira

console.log(user[escolha]) //camilly@email.com

const props = {
    nome: 'Camilly',
    email: 'camilly@email.com',
    idade: 18,

}

const { nome, email } = props;
console.log(nome) //Camilly
console.log(email) //camilly@email.com


