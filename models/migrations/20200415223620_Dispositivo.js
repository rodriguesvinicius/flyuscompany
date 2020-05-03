
exports.up = function(knex) {
    return knex.schema.createTable('dispositivos', (table)=>{
        table.increments('idDispositivo').primary();
        table.string('descDispositivo');
        table.integer('statusDispositivo',2).notNullable();
        table.timestamp('dataInstalacaoDispositivo');
        table.integer('idUsuario').notNullable();
        table.integer('idLocalidade').notNullable();
        table.foreign('idUsuario').references('idUsuario').inTable('usuarios');
        table.foreign('idLocalidade').references('idLocalidade').inTable('localidades');
    })
};

exports.down = function(knex) {
  
};