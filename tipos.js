"use strict";
// Boolean
const contaPaga = false;
// Number
const idade = 23;
const avaliacao = 4.5;
// String
const nome = 'Juliana';
// Array
const idades = [23, 25, 29, 60, 80];
const idades2 = [1, 2, 3, 4, 5];
// Tuple
let jogadores;
jogadores = ['A', 4, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
const retornoDaAPI = [123, 'Juliana', false];
const retornoDaAPI2 = {
// .....
};
// Void 
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
const u = undefined;
const n = null;
// Object
function criar(objeto) {
    // ..
}
criar({
    propriedade: 1,
});
// Never
function loopInfinito() {
    while (true) { }
}
;
function erro(mensagem) {
    throw new Error(mensagem);
}
;
function falha() {
    return erro('Algo falhou');
}
;
// Union Types
const nota = 5;
function exibirNota(nota) {
    console.log(`A nota é ${nota}`);
}
;
const funcionarios = [{
        nome: 'ABC',
        sobrenome: 'DEF',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario', funcionario.nome);
    }
}
;
// Valores nulos ou opcionais
let altura = 1.6;
altura = null;
const contato = {
    nome: 'lalalaa',
    telefone1: '123456'
};
// Type Assertion
const minhaIdade = 23;
minhaIdade.toString();
// const input = document.getElementById('numero1') as HTMLInputElement;
const input = document.getElementById('numero1');
console.log(input.value);
