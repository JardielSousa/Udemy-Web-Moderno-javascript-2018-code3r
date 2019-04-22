const config = require("../knexfile.js")
const knex = require("knex")(config)

// Executando as migrates
knex.migrate.latest([config])

module.exports = knex