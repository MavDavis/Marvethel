import { Router } from 'express'
import { signup, login, getMe } from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

// POST /api/v1/auth/signup
router.post('/signup', signup)

// POST /api/v1/auth/login
router.post('/login', login)

// GET /api/v1/auth/me  (protected)
router.get('/me', protect, getMe)

export default router
