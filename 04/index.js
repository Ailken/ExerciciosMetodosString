let identificador = "123";
let nome = "Ailken xxxxx sxxxxx";
let email = "      ailkenxx@email.com  ";

function formatIdentificador(identificador) {
    return identificador.padStart(6, '0');
}
function formatNome(nome) {
        return nome.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
function formatEmail(email) {
    return email.trim();
}

let objetoFormatado = {
    identificador: formatIdentificador (identificador),
    nome: formatNome(nome),
    email: formatEmail(email)
};

console.log(objetoFormatado.identificador);
console.log(objetoFormatado.nome);
console.log(objetoFormatado.email);