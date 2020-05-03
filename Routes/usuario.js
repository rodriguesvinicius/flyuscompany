const express = require('express');
const routes = express.Router();
const connection = require('../config/connection')
const knex = require('knex');
const Usuario = require('../models/Usuario')
const passport = require('passport')
const { deslogado } = require('../helper/authentication')


routes.get("/login", (req, res) => {
    res.render('usuario/login.handlebars', { DefaultPagina: 1 });
})

routes.get('/registro', (req, res) => {
    res.render('usuario/registro.handlebars', { DefaultPagina: 1 })
})

routes.post('/registrar', (req, res) => {
    /*Author Lucas Monteiro && Vinicius Alves*/

    var erros = [];

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ texto: "Email inválido" });
    }

    if (req.body.selectPerson == "1") {
        if (!req.body.cnpj || typeof req.body.cnpj == undefined || req.body.cnpj == null) {
            erros.push({ texto: "Cnpj inválido" });
        }
        if (!req.body.socialName || typeof req.body.socialName == undefined || req.body.socialName == null) {
            erros.push({ texto: "Razão Social inválida" });
        }
    }
    if (req.body.selectPerson == "0") {
        if (!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null) {
            erros.push({ texto: "Cpf inválido" });
        }
        if (!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
            erros.push({ texto: "Nome inválido" });
        }
    }

    if (!req.body.password || typeof req.body.password == undefined || req.body.password == null) {
        erros.push({ texto: "Senha inválido" });
    }
    if (req.body.password.length < 8) {
        erros.push({ texto: "Senha deve ter 8 caracteres" });
    }
    if (req.body.password != req.body.repeatPassword) {
        erros.push({ texto: "Senhas não coincidem" });
    }
    if (erros.length > 0) {
        res.render('usuario/registro.handlebars', { erros: erros, DefaultPagina: 1 });
    } else {
        Usuario.findOne({ where: { emailUsuario: req.body.email } }).then((usuario) => {
            if (usuario) {
                req.flash('error_msg', 'Email já está sendo usado')
                res.redirect('/usuarios/registro')
            } else {
                // Registrando pessoa juridica
                if (req.body.selectPerson == 1) {
                    Usuario.create({
                        nomeUsuario: req.body.socialName,
                        emailUsuario: req.body.email,
                        senhaUsuario: req.body.password,
                        ruaUsuario: null,
                        cidadeUsuario: null,
                        estadoUsuario: null,
                        numeroRuaUsuario: null,
                        tipoUsuario: 0,
                        cnpjCpfUsuario: req.body.cnpj,
                        razaoSocialUsuario: req.body.socialName
                    }).then(() => {
                        req.flash('success_msg', 'Usuario criado com sucesso!');
                        res.redirect('/usuarios/login');
                    }).catch((err) => {
                        console.log(err);
                        req.flash('error_msg', 'Erro ao cadastrar o usuário!');
                        res.redirect('/usuarios/regitro')
                    })
                } else {
                    // Registrando pessoa fisica
                    Usuario.create({
                        nomeUsuario: req.body.name,
                        emailUsuario: req.body.email,
                        senhaUsuario: req.body.password,
                        ruaUsuario: null,
                        cidadeUsuario: null,
                        estadoUsuario: null,
                        numeroRuaUsuario: null,
                        tipoUsuario: 0,
                        cnpjCpfUsuario: req.body.cpf,
                        razaoSocialUsuario: req.body.name
                    }).then(() => {
                        req.flash('success_msg', 'Usuario criado com sucesso!');
                        res.redirect('/usuarios/login');
                    }).catch((err) => {
                        console.log(err);
                        req.flash('error_msg', 'Erro ao cadastrar o usuário!');
                        res.redirect('/usuarios/regitro')
                    })
                }
            }
        }).catch((err) => {
            console.log(err)
            req.flash('error_msg', 'Erro interno, tente novamente...');
            res.redirect('/usuarios/registro');
        })
    }
})


routes.get('/dashboard', deslogado, (req, res) => {
    res.render('usuario/dashboard.handlebars', { DashboardDefault: 1 })
})

routes.get('/calendar', deslogado, (req, res) => {
    res.render('usuario/appCalendar.handlebars', { DashboardDefault: 1 })
})

routes.get('/appchat', deslogado, (req, res) => {
    res.render('usuario/appChat.handlebars', { DashboardDefault: 1 })
})

routes.get('/ticket', deslogado, (req, res) => {
    res.render('usuario/ticketlist.handlebars', { DashboardDefault: 1 })
})

routes.get('/relatorios', deslogado, (req, res) => {
    res.render('usuario/relatorio.handlebars', { DashboardDefault: 1 })
})

routes.get('/minhaconta', deslogado, (req, res) => {
    res.render('usuario/minhaConta.handlebars', { DashboardDefault: 1 })
})

// autenticando o usuario nesta rota
routes.post('/login', (req, res, next) => {
    console.log(req.body.senha)
    passport.authenticate("local", {
        successRedirect: "/usuarios/dashboard",
        failureRedirect: "/usuarios/login",
        failureFlash: true
    })(req, res, next)

})

// roto que desloga o usuario de uma sessã
routes.get('/logout', (req, res) => {
    req.logout()
    req.flash("success_msg", "Deslogado com sucesso")
    res.redirect('/usuarios/login')
})


module.exports = routes;