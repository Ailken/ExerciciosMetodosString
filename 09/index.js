function gerarNick (nome) {
    const nickname = '@' + nome.split(' ').map(part => part.toLowerCase()).join('').substring(0, 13);

    return nickname;
}

const nome = 'Ailken Fidelis';
console.log(gerarNick(nome));