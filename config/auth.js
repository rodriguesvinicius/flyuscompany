const localStrategy = require('passport-local').Strategy
const Usuario = require('../models/Usuario')
module.exports = function (passport) {
    passport.use(new localStrategy({ usernameField: "email", passwordField: "senha" }, (email, senha, done) => {
        Usuario.findOne({ where: { emailUsuario: email } }).then((usuario) => {
            if (!usuario) {
                console.log("Conta não existe")
                return done(null, false, { message: "Esta conta não existe" })
            } else {
                if (!(usuario.senhaUsuario == senha)) {
                    console.log("Senha incorreta")
                    return done(null, false, { message: "As senhas não correspondem " })
                }
                return done(null, usuario)
            }
        })
    }))

    passport.serializeUser(function (user, done) {
        done(null, user.idUsuario);
        // if you use Model.id as your idAttribute maybe you'd want
        // done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findOne({where:{ idUsuario: id }}).then(user => {
          done(null, user);
        }).catch(err => done(err));
      });
}