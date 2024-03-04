import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import router from './router'

const app = express()

const port = 3001

app.use(bodyParser.json())
app.use(cors())

app.listen(port, ()=>{
    console.log("server abrido");
})

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/gestao_estoque')

mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router)