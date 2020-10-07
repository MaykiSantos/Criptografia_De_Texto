window.addEventListener('load', function(event){});//função executada após todo html ter sido carrgado

//Variavel Globais
const btnCriptografar = document.querySelector("#criptografar");
const btnDescriptografar = document.querySelector("#descriptografar");
const campoTexto = document.querySelector("#novo-conteudo");

//EVENTOS

btnCriptografar.addEventListener('click', function(event){
    event.preventDefault();

    let texto = document.querySelector("#texto-normal");
    let chave = document.querySelector("#chave-criptografar");
    let textoCifrado = document.querySelector("#texto-cifrado");

    let processado = CryptoJS.AES.encrypt(texto.value, chave.value);

    campoTexto.innerHTML = processado;
});


btnDescriptografar.addEventListener('click', function(event){
    event.preventDefault();

    let textoCifrado = document.querySelector("#texto-cifrado");
    let chave = document.querySelector("#chave-descriptografar");
    let textoNormal = document.querySelector("#texto-normal");

    let processado = CryptoJS.AES.decrypt(textoCifrado.value, chave.value);

    campoTexto.innerHTML = processado.toString(CryptoJS.enc.Utf8);
});
