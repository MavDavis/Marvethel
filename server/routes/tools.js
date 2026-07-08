import { Router } from 'express'
import { protect } from '../middleware/auth.js'
import AiTool from '../models/AiTool.js'

const router = Router()

router.use(protect)

// GET /api/v1/tools?project=<id>
router.get('/', async (req, res) => {
  try {
    const filter = { owner: req.user._id }
    if (req.query.project) filter.project = req.query.project
    const tools = await AiTool.find(filter).sort('-updatedAt')
    res.json({ tools })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST /api/v1/tools
router.post('/', async (req, res) => {
  try {
    const { name, project, model, systemPrompt, promptTemplate, emoji } = req.body
    if (!name || !project) return res.status(400).json({ message: 'Name and project are required' })
    const tool = await AiTool.create({ name, project, model, systemPrompt, promptTemplate, emoji, owner: req.user._id })
    res.status(201).json({ tool })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// PATCH /api/v1/tools/:id
router.patch('/:id', async (req, res) => {
  try {
    const tool = await AiTool.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true, runValidators: true }
    )
    if (!tool) return res.status(404).json({ message: 'Tool not found' })
    res.json({ tool })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// DELETE /api/v1/tools/:id
router.delete('/:id', async (req, res) => {
  try {
    const tool = await AiTool.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
    if (!tool) return res.status(404).json({ message: 'Tool not found' })
    res.json({ message: 'Tool deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
