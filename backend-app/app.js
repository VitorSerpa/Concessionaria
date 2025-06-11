const express = require("express")
const app = express()

const port = process.env.port || 5000

app.get("/", (req, res) => {
    return res.send("<h1>Olá</h1>")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})