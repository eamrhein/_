const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const keys = require('./server/keys')
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const passport = require('passport');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');
const multerS3 = require('multer-s3');
const users =  require('./server/routes/api/1.0/users')
const trips =  require('./server/routes/api/1.0/trips')



const params = {
  accessKeyId: keys.id,
  secretAccessKey: keys.secretAccess,
  Bucket: keys.bucket
}
AWS.config.update(params);

const S3 = new AWS.S3();

mongoose
    .connect(keys.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch((err) => console.log(err))


//passport
app.use(passport.initialize());
// require('./server/passport')(passport);
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//img upload

const upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: keys.bucket,
    metadata: (req, file, cb) => {
      cb(null, {fieldName: file.fieldname});
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString())
    }
  })
})

app.post('/img', upload.array('photos', 10),(req,res) =>{
  let keys = [];
  req.files.forEach(file => {
    const url = S3.getSignedUrl('getObject', {
      Bucket: file.bucket,
      Key: file.key,
    })
    console.log(file)
    keys.push({key:file.key, mimetype: file.mimetype, url})
  });
  res.send(keys)
})

app.get('/img/:id', (req, res) => {
  let id = req.params.id
  let type = req.query.type
  // let contentType = req.query
  const url = S3.getSignedUrl('getObject', {
    Bucket: keys.bucket,
    Key: id,
    ResponseContentType: type
  })
  res.json(url)
})
//routes
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  app.use('/api/users', users);
  app.use('/api/trips', trips);
app.listen(port, () => console.log(`Listening on port ${port}`));