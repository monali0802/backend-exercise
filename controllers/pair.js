const db = require("../config/db.js");

exports.pairCheck = (req, res) => {
    let pair = req.params.pair;
    pair = pair.replace('ETH', 'ETH/');
    
    //return one recent vwap price for the pair
    db.get(`SELECT pair, vwap FROM market_price WHERE pair = ? ORDER BY startTime DESC`, [pair], (err, row) => {
        if (err) {
          res.status(500).send({
              error: "Internal server error",
              code: 500
          });
        }
        
        res.status(200).json(row);
    });
};

exports.pairHistory = (req, res) => {
    let pair = req.params.pair;
    pair = pair.replace('ETH', 'ETH/');
    
    //return history for the pair
    db.all(`SELECT pair, DATE(startTime, 'unixepoch') AS date, MAX(high) as high, MIN(low) as low FROM market_price WHERE pair = ? GROUP BY date ORDER BY startTime DESC`, [pair], (err, rows) => {
        if (err) {
          res.status(500).send({
              error: "Internal server error",
              code: 500
          });
        }
        let result = [];
        result = rows.map(row => Object.values(row));
        
        // rows.forEach(row => {
        //     let data = [];
        //     for(var i in row) {
        //         data.push(row[i]);
        //     }
        //     result.push(data)
        // });
        res.status(200).json(result);
    });
};
