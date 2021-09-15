const express = require("express");
const app = express();

app.get("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Sumar ${n1} + ${n2} = ${n1+n2}`);
});

app.post("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Multiplicar ${n1} * ${n2} = ${n1*n2}`);
});

app.put("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Dividir ${n1} / ${n2} = ${n1/n2}`);
});

app.patch("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Potencia ${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
});

app.delete("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Restar ${n1} - ${n2} = ${n1-n2}`);
});

app.listen(3000, ()=>{
    console.log("Aplicación corriendo en el puerto puerto 3000");
});
