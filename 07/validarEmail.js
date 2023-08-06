function verificarEmail (email) {
    if (!email.includes('@') || !email.includes('.') || email.startsWith('.') || email.endsWith('.')) {
        return false;
    }

    const arroba = email.indexOf('@');
    const ponto = email.lastIndexOf('.');

    if (arroba === 0 || arroba === email.length -1 || ponto - arroba < 2) {
        return false;
    }
    return true;
}

function imprimirResultado(email) {
    const valido = verificarEmail(email);
    console.log(`${email}\t${valido ? 'E-mail válido' : 'E-mail inválido'}`);
}

imprimirResultado("jose@cubos.academy");
imprimirResultado("jose@cubos.academy.br");
imprimirResultado("jose.messias@cubos.academy");
imprimirResultado("jose.messias@cubos.io");
imprimirResultado("jose@cubos");
imprimirResultado("jose.messias@cubos");
imprimirResultado("jose.messias@.");
imprimirResultado("jose.@cubos");
imprimirResultado(".@");
imprimirResultado("@.");
imprimirResultado("jose.messias@cubos.");
imprimirResultado(".messias@cubos.");
imprimirResultado(".messias@cubos");