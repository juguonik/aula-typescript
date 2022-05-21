// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Juliana';

// Array
const idades: number[] = [23, 25, 29, 60, 80];
const idades2: Array<number> = [1, 2, 3, 4, 5]

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['A', 4, true];

// Enum
enum StatusAprovacao {
    Aprovado ='001',
    Pendente ='002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'Juliana', false];
const retornoDaAPI2: any = {
    // .....
};

// Void 
function printarNaTela(msg: string): void {
    console.log(msg);
    
    
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar (objeto: object) {
    // ..
}
criar ({
    propriedade: 1,
});

// Never
function loopInfinito (): never {
    while (true) {}
};

function erro (mensagem: string): never {
    throw new Error (mensagem);
};

function falha (){
    return erro ('Algo falhou');
};

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
    
};

// Alias

type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
};


const funcionarios: Funcionario[] = [{
    nome: 'ABC',
    sobrenome: 'DEF',
    dataNascimento: new Date ()
}];
function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario', funcionario.nome);
        
    }
};

// Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string //? indica que é opcional
};

const contato: Contato = {
    nome: 'lalalaa',
    telefone1: '123456'

}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString ();

// const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);

