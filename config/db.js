const sqlite3 = require('sqlite3').verbose();
const db_path = './db.sqlite3';


const db = new sqlite3.Database(db_path, (err) => {
    if (err) {
      console.error("Not connected to db");
    }
    console.log('Connected to db');
    
    //get the table name
    db.serialize(function () {
        db.get("select name from sqlite_master where type='table'", function (err, table) {
            console.log(table);
        });
    });

    //find the column from all records
    // db.all(`SELECT * FROM market_price`, (err, rows) => {
    //     var result = rows.map(row => row);
    // });
});

module.exports = db