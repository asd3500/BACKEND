// NODE SERVER
// const http = require("http");

// http.createServer((req, res)=>{
//     res.end('<h1>Server up!</h1>')
// }).listen(3000, "127.0.0.1",function(){
//     console.log('listening 3000 port');
// });

// EXPRESS SERVER

const config = require('./config')
//const cardController = require('./controller/cardController')
const cardRouter = require('./routers/cardRoute')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/', cardRouter)

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
app.get("/", function(request, response){
    response.send("Главная страница");
});




app.listen(config.port, ()=>{
    console.log(`listening ${config.port} port`)
})