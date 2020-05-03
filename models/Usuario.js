const db = require('../config/db');

const Usuario = db.sequelize.define('usuarios', {
    idUsuario:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    nomeUsuario: {
        type:db.Sequelize.STRING,
        allowNull:false
    },
    emailUsuario:{
        type:db.Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    senhaUsuario:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    ruaUsuario:{
        type:db.Sequelize.STRING
    },
    cidadeUsuario: {
        type:db.Sequelize.STRING
    },
    estadoUsuario: {
        type:db.Sequelize.STRING
    },
    numRuaUsuario: {
        type:db.Sequelize.STRING
    },
    tipoUsuario: {
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    cnpjCpfUsuario:{
        type:db.Sequelize.STRING
    },
    razaoSocialUsuario:{
        type:db.Sequelize.STRING
    },
    createdAt: {
        field: 'created_at',
        type: db.Sequelize.DATE,
        defaultValue: db.Sequelize.NOW
    },
    updatedAt: {
        field: 'updated_at',
        type:db.Sequelize.DATE,
        defaultValue: db.Sequelize.NOW
    },
})

//Usuario.sync({force:true})
module.exports = Usuario;