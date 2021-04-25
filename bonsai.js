const db = require('./database')

class Bonsai {
  constructor () {
    this.createBonsai()
  }

  createBonsai () {
    db.open().run(`CREATE TABLE IF NOT EXISTS bonsai (
      light INTEGER NOT NULL,
      temperature INTEGER NOT NULL,
      moisture INTEGER NOT NULL,
      conductivity INTEGER NOT NULL,
      battery INTEGER NOT NULL,
      date INTEGER NOT NULL
    );`).close()
  }

  insert ({ light, temperature, moisture, conductivity, battery, date }) {
    return new Promise((resolve, reject) => {
      db.open().run(
        `INSERT INTO bonsai(light, temperature, moisture, conductivity, battery, date)
          VALUES ('${light}', '${temperature}', '${moisture}', '${conductivity}', '${battery}', '${date}');
        `, error => error ? reject(error) : resolve(true)).close()
    })
  }

  select () {
    return new Promise((resolve, reject) => {
      db.open().all('SELECT * FROM bonsai ORDER BY rowid DESC LIMIT 240', (error, row) => error ? reject(error) : resolve(row)).close()
    })
  }
}

module.exports = new Bonsai()
