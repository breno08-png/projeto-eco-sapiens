const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const porta = 3000
const app = express()

const conexao = require('./db.js')

//modulo
const crypto = require('crypto')
app.use(cors())


app.use(express.json())

app.listen(porta, () => {
    console.log("Servidor rodando !")
})

//Criando uma rota

app.post("/faleconosco", async (req,res) =>{
    try {
        const {nome_completo, email, assunto, mensagem} = req.body

        let sql = `Insert into fale_conosco (nome,email,assunto,mensagem) Values (?,?,?,?)`
        let [resultado2] = await conexao.query(sql,[nome_completo, email, assunto, mensagem])

       if(resultado2.affectedRows == 1){
           res.json({"resposta":"Mensagem enviada com sucesso!"})
       }else{
           res.json({"resposta":"Erro ao enviar a mensagem"})
       }

   } catch (error) {
       console.log(error)
       res.status(500).json({"resposta":"Erro interno do servidor"})
   }

   app.post("/login", async(req,res) =>{
    try {
        const {email,usuario,senha} = req.body

        let sql = `Insert into login (email,usuario,senha) Values (?,?,?)`
        let [resultado2] = await conexao.query(sql,[email,usuario,senha])

        if(resultado2.affectedRows == 1){
            res.json({"resposta":"login efetuado com sucesso!"})
        }else{
            res.json({"resposta":"Senha ou usuario incorreto!"})
        }
        

    } catch (error) {
        console.log(error)
    }
   })
})

app.post("/cadastro", async(req,res) =>{
    try {
        const {email,usuario,senha} = req.body

        let sql = `Insert into login (email,usuario,senha) Values (?,?,?)`
        let [resultado2] = await conexao.query(sql,[email,usuario,senha])

        if(resultado2.affectedRows == 1){
            res.json({"resposta":"Cadastro efetuado com sucesso!"})
        }else{
            res.json({"resposta":"Algo deu Errado!"})
        }
        

    } catch (error) {
        console.log(error)
        
    }
   })
