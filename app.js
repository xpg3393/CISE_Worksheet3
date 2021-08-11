const express = require('express');
const connectDB = require('./config/db');
const path = require("path");
var cors = require('cors');

const books = require('./routes/api/books');

const app = express();

connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "build"));
})

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));