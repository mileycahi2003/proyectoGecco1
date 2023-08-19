import express from "express";

const app = express();

app.set('view wngine', 'ejs')
app.get('/', (req, res)=> res.render('index'))

app.listen(3000)
