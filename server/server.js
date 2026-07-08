import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.js'
import projectRoutes from './routes/projects.js'
import toolRoutes from './routes/tools.js'
import analyticsRoutes from './routes/analytics.js'

const app = express()
const PORT = process.env.PORT || 5000

const allowedOrigins = [
  'http://localhost:3000',
  'https://marvethel.netlify.app',
  'https://marvethel.onrender.com',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
    cb(new Error('Not allowed by CORS'))
  },
  credentials: true,
}))
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/tools', toolRoutes)
app.use('/api/v1/analytics', analyticsRoutes)

// Health check
app.get('/api/v1/health', (_req, res) => res.json({ status: 'ok' }))

// 404
app.use((_req, res) => res.status(404).json({ message: 'Route not found' }))

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' })
})

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Marvethel API running on http://localhost:${PORT}`))
})
