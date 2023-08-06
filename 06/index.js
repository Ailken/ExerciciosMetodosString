function formatarNumeroCelular(celular) {
    const celularString = celular.toString();
    //1. caso não exista o DDD, adiciona o "9" np inicio do numero
    //2. caso exista o DDD, adiciona o "9" após o codigo DDD
    //3. se o numero não estiver em nenhum dos formatos válidos, retorna o número original;
    if (celularString.length === 8) {
        return `9 ${celularString.slice(0, 4)}-${celularString.slice(4)}`;
    } else if (celularString.length === 10) {
        return `(${celularString.slice(0, 2)}) 9 ${celularString.slice(2, 6)}-${celularString.slice(6)}`;
    } else {
        return celularString;
    }
}

const celular1 = 7199918888;
const celular2 = 99918888;

console.log(formatarNumeroCelular(celular1));
console.log(formatarNumeroCelular(celular2));