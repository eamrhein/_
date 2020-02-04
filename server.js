const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require('./server/keys').mongoDB;
const passport = require('passport');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const users =  require('./server/routes/api/1.0/users')

console.log(db)
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch((err) => console.log(err))


//passport
app.use(passport.initialize());
// require('./server/passport')(passport);
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  app.use('/api/users', users);

app.listen(port, () => console.log(`Listening on port ${port}`));