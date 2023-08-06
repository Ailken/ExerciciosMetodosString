function validarArquivo(nomeArquivo) {
    const extensoesPermitidas = ['.jpg', '.jpeg', '.gif', '.png'];
    const extensao = nomeArquivo.substring(nomeArquivo.lastIndexOf('.')).toLowerCase();

    if (extensoesPermitidas.includes(extensao)) {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

const nomeArquivo1 = 'Foto da Familia.pdf';
const nomeArquivo2 = 'Foto da Familia.png';

validarArquivo(nomeArquivo1);
validarArquivo(nomeArquivo2);