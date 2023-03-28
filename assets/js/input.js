const bnt = document.querySelector("#enviar");

bnt.addEventListener("click", function(e){

    e.preventDefault();

    const name = document.querySelector("#nome");
    const numero = document.querySelector("#numero");

    console.log(name.value);
    console.log(numero.value);
    const value = name.value + " " + numero.value;

    console.log(value);
    alert(value);
});