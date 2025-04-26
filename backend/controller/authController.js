const User = require('../models/USER')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1d' },
  )
}

const signup = async (req, res) => {
  const { name, email, password, role } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
    })
    await user.save()

    const token = generateToken(user)
    return res
      .status(201)
      .json({
        user,
        token,
        message: 'User registered. Please check your email for verification.',
      })
  } catch (err) {
    console.error('Signup Error: ', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }
    const token = generateToken(user)
    return res.status(200).json({ user, token })
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const getMe = async (req, res) => {
  try {
    const user = req.user
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Failed to get user' })
  }
}

module.exports = { login, signup, getMe }
