var express = require("express");
var exphbs = require("express-handlebars");


// Set up Express
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var routes = require("./controllers/burgers_controller")
app.use("/", routes);

// Start the server
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

