
exports.up = function(knex) {
    return knex.schema.createTable('estatisticas' ,(table)=>{
        table.increments('idEstatistica').primary();
        table.string('cpuEstatistica').notNullable();
        table.string('ramEstatistica').notNullable();
        table.string('hdEstatistica').notNullable();
        table.integer('idDispositivo').notNullable();
        table.string('osEstatistica');
        table.string('nucleosCpuEstatistica');
        table.foreign('idDispositivo').references('idDispositivo').inTable('dispositivos');
    })
};

exports.down = function(knex) {
  
};
