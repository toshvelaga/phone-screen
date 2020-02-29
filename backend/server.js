const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

const dbRoute = 'mongodb+srv://toshvelaga:ybhA8bIrWE8jo6K0@cluster0-ckk4o.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Listening on PORT 4000

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

// Routes

const rolesRouter = require('./routes/roles');
const candidatesRouter = require('./routes/candidates');
app.use('/roles', rolesRouter);
app.use('/candidates', candidatesRouter);