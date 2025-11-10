
const express = require('express');
const app = express();
const PORT = 3000; 
app.use(express.json());

const movieRouter = require('./routes/movies.routes.js');

// Ini adalah prinsip "Discoverability"
app.get('/api/info', (req, res) => {
  res.status(200).json({ // Status 200 OK 
    status: "success",
    author: "MLutfan", 
    nim: "230104040129",   
    resource: "Movies", 
    description: "UTS Web Service Engineering"
  });
});

app.use('/api/movies', movieRouter);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});