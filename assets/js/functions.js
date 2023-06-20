var cosas = [
    {id:1, cosas: "monitor"},
    {id:2, cosas: "pantalla"},
    {id:3, cosas: "mouse"},
    {id:4, cosas: "cables"}
]

if(cosas.some(cosa => cosa.id == 0)){
    console.log("esta repetido");
}else{
    
    console.log("NO esta repetido");
}