const ex=require("express");

const app = ex();

const port = 4000;

app.get('/',(req,res)=>{
    // res.write("<h1>Hello World</h1>");
    res.send("<h1>Hello Shajahan.</h1>")
    // res.end();
})
app.listen(port,(err)=>{
    if(err) throw err
})