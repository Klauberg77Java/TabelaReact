const express = require('express');
const bodyParser = require('body-parser');

const  appRouter = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

appRouter.configure(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Servidor rodando... http://localhost:5000"));

