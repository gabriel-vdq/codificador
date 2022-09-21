function puxarTexto() {

    return "";
}


var teste = "krAstén";

function codificacao() {
    var texto = teste;
    var tamanho = texto.length;
    var i = 0;
   
    while(i < tamanho) {
        console.log("*");

        if(texto[i] === "a") {
            texto = texto.substring(0, i) + 'enter' + texto.substring(i + 1);
            i = i + 5;
        } else if(texto[i] === "e") {
            texto = texto.substring(0, i) + 'imes' + texto.substring(i + 1);
            i = i + 4;
        } else if(texto[i] === "i") {
            texto = texto.substring(0, i) + 'ai' + texto.substring(i + 1);
            i = i + 2;
        } else if(texto[i] === "o") {
            texto = texto.substring(0, i) + 'ober' + texto.substring(i + 1);
            i = i + 4;
        } else if(texto[i] === "u") {
            texto = texto.substring(0, i) + 'ufat' + texto.substring(i + 1);
            i = i + 4;
        } else {
            i++;
        }

        tamanho = texto.length;
       
    }
    return console.log(texto);
}

var teste2 = "Enter imes ai ober ufat";

function decodificacao() {
    var texto = teste2;
    var tamanho = texto.length;
    var i = 0;
    
    texto = texto.replace("enter", "a");
    texto = texto.replace("imes", "e");
    texto = texto.replace("ai", "i");
    texto = texto.replace("ober", "o");
    texto = texto.replace("ufat", "u");

    return console.log(texto);
}
