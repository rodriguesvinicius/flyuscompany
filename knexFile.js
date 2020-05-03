// Update with your config settings.
const pg = require('pg')
pg.defaults.ssl = true;
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://hphcpfegbshqen:87bd4d6f41b0836ff8b329431af5e28bea74124669c8e6ee2057bff9981835da@ec2-34-206-252-187.compute-1.amazonaws.com:5432/dcuek9ehi9h9je',
    ialectOptions: {
        ssl: {
            rejectUnauthorized: true
        }
    },

    migrations: {
        directory: './models/migrations'
    },
    useNullAsDefault: true,
},

};
