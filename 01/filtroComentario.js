const comentario = "Esse COVID é muito perigoso!";

//const palavrasProibidas = /(pandemia|covid)/i;

// if (palavrasProibidas.test(comentario)) {
    //     console.log("Comentário bloqueado por conter palavras proibidas.");
    // } else {
    //     console.log("Comentário autorizado.")
    // }
const palavrasProibidas = ["pandemia", "covid"];
const comentarioLowerCase = comentario.toLowerCase();

if (palavrasProibidas.some((palavra) => comentarioLowerCase.includes(palavra))) {
    console.log("Comentário bloqueado por conter palavras proibidas.");
} else {
    console.log("Comentário autorizado.")
}
