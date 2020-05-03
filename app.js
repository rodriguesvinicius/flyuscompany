const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const Usuario = require('./models/Usuario')
const passport = require('passport')
require('./config/auth')(passport)
    //chamando rota usuario para o serve app 
const usuario = require('./Routes/usuario')


// Sessao
app.use(session({
    secret: "System_monitoring",
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

// Flash
app.use(flash())

// declarando variaveis globais que poderão ser usadas posteriormente
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user = req.user || null;
    next()
})

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Handlebars aqui estamos setando o arquivo main como o principal!

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
}))

//Public
app.use(express.static(path.join(__dirname, "public")))

// configurando o middle
app.use((req, res, next) => {
    console.log("Eu sou um midle")
    next();
})

// raiz do servidor
app.get('/', (req, res) => {
    res.render('index.handlebars', { DefaultPagina: 1 })
})


// primeiro parametro criando um prefixo admin
app.get
app.use('/usuarios', usuario)
const PORT = process.env.PORT || 8081

// iniciando o servidor e monstrando a mensagem
app.listen(PORT, () => {
    console.log("Servidor Rodando")
})