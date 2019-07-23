// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, val, cb) {
    var queryString = 
    `INSERT INTO ${table} (${cols})
    VALUES
    ('${val}');
    `

    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, col, val, condition, cb) {
    var queryString = 
    `
    UPDATE ${table}
    SET ${col} = '${val}'
    where ${condition}
    `

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;