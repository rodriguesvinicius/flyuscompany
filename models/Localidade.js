const db = require("../config/db");

const Localidade = db.sequelize.define('localidades',{
    idLocalidade:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    descLocalidade:{
        type:db.Sequelize.STRING,
        allowNull:false,
    },
    ruaLocalidade:{
        type:db.Sequelize.STRING,
        allowNull:false,
    },
    numeroLocalidade:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    estadoLocalidade:{
        type:db.Sequelize.STRING,
        allowNull:false
    }
})

//Localidade.sync({force:true})
module.exports = Localidade;