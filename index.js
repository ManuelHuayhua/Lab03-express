const express=require("express");
const app= express();
const port = 5000;


app.use(express.static(__dirname+"/public"))
app.get('/',(req, res)=>{
    res.send('mi respuesta desde')
})

app.get('/clientes',(req, res)=>{
    res.send('Clientes')
})

app.get('/productos',(req, res)=>{
    res.send('Productos')
})






app.listen(port,()=>{
    console.log('servidor a su servicio en el puerto',port)
})