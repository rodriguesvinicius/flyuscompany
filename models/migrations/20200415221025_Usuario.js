
exports.up = function(knex) {
  return knex.schema.createTable('usuarios',(table)=>{
      table.increments('idUsuario').primary();
      table.string('nomeUsuario').notNullable();
      table.string('emailUsuario').notNullable();
      table.string('senhaUsuario').notNullable();
      table.string('ruaUsuario');
      table.string('cidadeUsuario');
      table.string('estadoUsuario');
      table.string('numRuaUsuario');
      table.integer('tipoUsuario');
      table.string('cnpjCpfUsuario').notNullable();
      table.string('razaoSocialUsuario').notNullable();
  })
};

exports.down = function(knex) {
  
};
