document.addEventListener("keydown", function(event){
    
        console.log(event.key)
    
});

document.addEventListener("keyup", function(e){
    if(event.key === "Enter"){
        console.log("Soltou Enter")
    }
});