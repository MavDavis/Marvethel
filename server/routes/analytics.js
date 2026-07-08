import { Router } from 'express'
import { protect } from '../middleware/auth.js'
import AiTool from '../models/AiTool.js'

const router = Router()

router.use(protect)

// GET /api/v1/analytics/overview
router.get('/overview', async (req, res) => {
  try {
    const tools = await AiTool.find({ owner: req.user._id })
    const totalCalls = tools.reduce((sum, t) => sum + t.callCount, 0)
    res.json({
      totalCalls,
      activeTools: tools.filter(t => t.status === 'active').length,
      totalTools: tools.length,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
