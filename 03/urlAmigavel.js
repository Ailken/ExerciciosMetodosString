function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText)
    }
    return original;
}

let texto = "Aprenda programar do zero na Cubos Academy";

console.log(replaceAll(texto, " ", "-"));