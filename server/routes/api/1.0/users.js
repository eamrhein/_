const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../../models/user');
const keys = require('../../../keys');

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  });

router.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if(user) {
                return res.status(400).json({email: 'A user has already registered with this email'})
            } else {
                const user = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (_err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hash) => {
                      if (err) throw err;
                      user.password = hash;
                      user.save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err));
                    });
                  });
                
            }
        })
})

router.post('/login', (req, res) => { 
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ email: 'this user does not exist' });
        }
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
              };
              jwt.sign(payload,
                keys.secret,
                { expiresIn: 3600 },
                (_err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
            } else {
              return res.status(400).json({ password: 'Incorrect Password' });
            }
          });
      });
  })

  module.exports = router