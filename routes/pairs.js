const controller = require("../controllers/pair");

module.exports = function(app) {
    app.get(
        "/api/fx/ohlc/:pair",
        controller.pairCheck
    );
    app.get(
        "/api/fx/ohlc/:pair/history", 
        controller.pairHistory
    );
};