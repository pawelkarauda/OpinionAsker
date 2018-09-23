const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Load models
require("./models/User");

// Load services
require("./services/passport");

// Load keys
const keys = require("./config/keys");

// Connect mongo
mongoose
    .connect(
        keys.mongoURI,
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Mongoose connected");
    });

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Load routes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
