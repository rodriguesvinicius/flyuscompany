const Sequilize = require('sequelize')
const pg = require('pg')
pg.defaults.ssl = true;

//conexao com banco de dados
const sequelize = new Sequilize('dcuek9ehi9h9je','hphcpfegbshqen','87bd4d6f41b0836ff8b329431af5e28bea74124669c8e6ee2057bff9981835da',{
    host:"ec2-34-206-252-187.compute-1.amazonaws.com",
    port:5432,
    dialect:'postgres',
    ialectOptions: {
        ssl: {
            rejectUnauthorized: true
        }
    }
})

module.exports={
    Sequelize:Sequilize,
    sequelize:sequelize
}