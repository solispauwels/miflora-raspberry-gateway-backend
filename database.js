const sqlite3 = require('sqlite3').verbose()

exports.open = () => new sqlite3.Database('./database.db', (error) => error && console.error(error))
