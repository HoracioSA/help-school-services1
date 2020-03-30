
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('universities_id').notNullable();
        table.foreign('universities_id').references('id').inTable('universities')
    })
  
};

exports.down = function(knex) {
    table.schema.dropTable('incidents')
  
};
