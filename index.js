const express=require("express");
const app= express();
const port = 5000;


app.use(express.static(__dirname+"/public"))
app.get('/',(req, res)=>{
    res.send('mi respuesta desde')
})

app.get('/servi',(req, res)=>{
    res.send('segunda pagina')
})




app.listen(port,()=>{
    console.log('servidor a su servicio en el puerto',port)
})