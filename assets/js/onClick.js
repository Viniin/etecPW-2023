// puxando onclick pelo html
function descricao(){

    document.getElementById("conteudo").innerHTML = "<p>se voce quiser colocar alguma coisa para aparecer é so trocar</p>";
    
    alert("Essa funçao esta progamada junto com o HTML, tente Clicar no botao abaixo");
}
// puxando onclick direto do js no botão
var btn = document.querySelector("#botao");
console.log(btn);

btn.addEventListener("click", function(){

    alert("Essa funçao esta progamada diretamente pelo js tendo so o id do botao, tente Clicar no titulo");
   
    document.getElementById("conteudo2").innerHTML = "<p>se voce quiser colocar alguma coisa para aparecer é so trocar</p>";

    this.style.color= "green";

});

// puxando onclick direto do js no Texto

var titulo = document.querySelector("#titulo");

titulo.addEventListener("click", function(){
    console.log("fununcia tambem");

    alert("Essa funçao esta progamada diretamente pelo js tendo so o id do texto");
})