

// puxando onclick direto do js no botão
var btn = document.querySelector("#botao");

console.log(btn);

btn.addEventListener("dblclick", function(){

    console.log("clicou");

    alert("Fununcia, clique 2 vezes no titulo");
   
});

// puxando onclick direto do js no Texto
var texto = document.querySelector("#texto");

texto.addEventListener("dblclick", function(){
    console.log("fununcia tambem");

    alert("Essa funçao esta progamada diretamente pelo js tendo so o id do texto");
});