const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.listen(4000, err => {
    if (err) {
        console.log('Ocorreu um erro!')
    } else {
        console.log('Servidor iniciado com sucesso!')
    }
})

app.get('/', ((req, res) => {
    res.send('<h1>olaaaaa</h1>')
}))

app.get('/ola/:nome/:empresa', ((req, res) => {
    res.send(`<h1>Olá ${req.params.nome} da empresa ${req.params.empresa}</h1>`)
}))

app.post('/hello', (req, res) => {
    let body = req.body
    body.message = `Hello ${body.name}`
    res.json(body)
})
