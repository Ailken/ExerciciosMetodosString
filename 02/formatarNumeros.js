// const cpf = "12345678900";
// const cnpj = "12345678900";

function formatarDocumento(documento) {
    //remover caracteres não numéricos
    documento = documento.replace(/\D/g, '');
    //verificar o tamanho do documento
    if(documento.length === 11) {
        //CPF
        if(/^(\d)\1 + $/.test(documento)) {
            return "CPF Inválido";
        }

        return documento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (documento.length === 14) {
        //Cnpj
        if (/^(\d)\1 + $/.test(documento)) {
            return "CNPJ Inválido";
        }

        return documento.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        return "Documento Inválido";
    }
}

const cpf = "12345678900";
console.log(formatarDocumento(cpf));

const cnpj = "12345678000199";
console.log(formatarDocumento(cnpj));

const documentoInvalido = "12309";
console.log(formatarDocumento(documentoInvalido));