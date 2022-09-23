function puxarTexto() {
    var texto = document.getElementById("userText").value;
    return texto;
}

function codificacao() {
    var texto = puxarTexto();
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

   return texto;
}

var teste2 = "Enter imes ai ober ufat";

function decodificacao() {
    var texto = puxarTexto();
    var tamanhoTexto = texto.length;
    var i = 0;
    
    while(i < tamanhoTexto) {
        texto = texto.replace("enter", "a");
        texto = texto.replace("imes", "e");
        texto = texto.replace("ai", "i");
        texto = texto.replace("ober", "o");
        texto = texto.replace("ufat", "u");
        
        i++;
        tamanhoTexto = texto.length;
    }

    return texto;
}

function addTextoCod() {
    document.getElementById("textoSumir").innerHTML = "";
    document.getElementById("textoRetorno").innerHTML = codificacao();
}

function addTextoDescod() {
    document.getElementById("textoSumir").innerHTML = "";
    document.getElementById("textoRetorno").innerHTML = decodificacao();
}

function copiar() {
    var textoCopiar = document.getElementById("textoRetorno").textContent;
    navigator.clipboard.writeText(textoCopiar);

    alert("Copiado com sucesso!");
}

function teste() {
    navigator.clipboard.readText().then((text)=> {
        alert('text');
    });
}