interface Usuario {
    nome: string,
    email: string,
    addres?:string
};

function getUser(): Usuario {
    return {
        nome: 'abc',
        email: 'abc@mail.com'
        
    }
};

function setUser(usuario: Usuario){
    // ...
}