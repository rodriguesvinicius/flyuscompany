const db = require('../config/db');

const Dispositivo = db.sequelize.define('dispositivos',{
    idDispositivo:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    descDispositivo:{
        type:db.Sequelize.STRING,
        allowNull:true,
    },
    statusDispositivo:{
        type:db.Sequelize.INTEGER,
        allowNull:false,
    },
    dataInstalacaoDispositivo:{
        type:db.Sequelize.DATE
    },
    idUsuario:{
        type:db.Sequelize.INTEGER,
        references:{
            model:'usuarios',
            key:'idUsuario'
        }
    },
    idLocalidade:{
        type:db.Sequelize.INTEGER,
        references:{
            model: 'localidades',
            key:'idLocalidade'
        }
    }
})

//Dispositivo.sync({force:true})
module.exports = Dispositivo;