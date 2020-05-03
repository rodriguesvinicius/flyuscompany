
exports.up = function(knex) {
    return knex.schema.createTable('localidades',(table)=>{
        table.increments('idLocalidade').primary();
        table.string('descLocalidade').notNullable();
        table.string('ruaLocalidade').notNullable();
        table.string('numeroLocalidade').notNullable();
        table.string('estadoLocalidade').notNullable();
    })
};

exports.down = function(knex) {
  
};
