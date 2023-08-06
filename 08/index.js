function removerPonto(cpfOuCnpj) {
    const cpfOuCnpjSemPonto = cpfOuCnpj.split('.').join('').split('-').join('').split('/').join('');
    console.log(cpfOuCnpjSemPonto); 
}

const cnpj = "021.525.0001-89"
const cpf = "011.022.033-44";
removerPonto(cpf);
removerPonto(cnpj);