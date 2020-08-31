const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');


//DB
const mongoURI = 'mongodbURI goes here';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.on('connected', () => console.log('Connected to MongoDB.'));

//ROUTES
app.use(express.json()); //before routes
app.use('/api/user', userRoutes)

//LISTENING
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log('Listening on 3000...'));