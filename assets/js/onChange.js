function classificar(){
    
    var valor =document.getElementById("valor").value;
    document.getElementById("mostrar").innerHTML = "descrição do evento"


    if(valor=="1"){
        alert("Você é raiz!");
    }else if(valor == "2"){
        alert("Você nao bate muito bem não ne?");
    }else{
        alert("Ainda é jovem, esta tudo bem");
    }
}

