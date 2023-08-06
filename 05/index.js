function formatarNumeroCartao(numeroCartao) {
    const primeirosQuatroDigitos = numeroCartao.slice (0,4);
    const ultimosQuatroDigitos = numeroCartao.slice (-4);
    const digitosOcultos = '*'.repeat(numeroCartao.length - 8);

    return primeirosQuatroDigitos + digitosOcultos + ultimosQuatroDigitos;
}

const numeroCartao = '1111222233334444';
const numeroCartaoFormatado = formatarNumeroCartao(numeroCartao);

console.log(numeroCartaoFormatado);