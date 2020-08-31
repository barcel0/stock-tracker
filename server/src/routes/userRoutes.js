const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const requireAuth = require('../middleware/requireAuth');
const User = require('../models/User');

// @route   GET /api/user
// @desc    Get user
// @access  Private
router.get('/', requireAuth, (req, res) => {
  res.send(req.user);
})

// @route   POST /api/user/signup
// @desc    Create user
// @access  Public
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save()
    .then(savedUser => {
      console.log('Saved user: ' + savedUser) //debug
      const token = jwt.sign({ userId: user._id }, 'mysecretkey');
      res.send({ token });
    })
    .catch(error => {
      return res.status(422).send({ error: 'Something went wrong: ' + error })
    });
})

// @route   POST /api/user/login
// @desc    Log in user
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(422).send({ error: 'Email and password must be provided.' });
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send({ error: 'User not found.' })
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'mysecretkey');
    console.log('logged in, token: ' + token) //debug
    res.send({ token });
  } catch (error) {
    return res.status(422).send({ error: 'Something went wrong: ' + error })
  }
})

// @route   PUT /api/user/watchlist
// @desc    Update watchlist
// @access  Private
router.put('/watchlist', requireAuth, async (req, res) => {
  const { watchlist } = req.body;
  if (!watchlist) return res.status(422).send({ error: 'No watchlist provided.' });
  const targetUser = await User.findById(req.user._id);
  targetUser.watchlist = watchlist;
  targetUser.save()
    .then(savedUser => {
      return res.send({ user: savedUser })
    })
    .catch(error => res.status(422).send({ error: 'Something went wrong: ' + error }))
})

module.exports = router;