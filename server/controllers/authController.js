import jwt from 'jsonwebtoken'
import User from '../models/User.js'

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '15m' })
}

// POST /api/v1/auth/signup
export async function signup(req, res) {
  try {
    const { name, email, password, company } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' })
    }
    const existing = await User.findOne({ email })
    if (existing) return res.status(409).json({ message: 'Email already registered' })

    const user = await User.create({ name, email, password, company })
    const token = signToken(user._id)
    res.status(201).json({ token, user })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// POST /api/v1/auth/login
export async function login(req, res) {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' })

    const user = await User.findOne({ email }).select('+password')
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const token = signToken(user._id)
    res.json({ token, user: user.toJSON() })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET /api/v1/auth/me
export async function getMe(req, res) {
  res.json({ user: req.user })
}
