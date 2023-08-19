import express from "express";
import {dirname} from 'path';
import { fileURLToPath } from "url";

const app = express();

dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res)=> res.render('index'))

app.listen(3000)
