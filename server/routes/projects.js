import { Router } from 'express'
import { protect } from '../middleware/auth.js'
import Project from '../models/Project.js'

const router = Router()

// All project routes require auth
router.use(protect)

// GET /api/v1/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user._id }).sort('-createdAt')
    res.json({ projects })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST /api/v1/projects
router.post('/', async (req, res) => {
  try {
    const { name, description, type, emoji } = req.body
    if (!name) return res.status(400).json({ message: 'Project name is required' })
    const project = await Project.create({ name, description, type, emoji, owner: req.user._id })
    res.status(201).json({ project })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET /api/v1/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, owner: req.user._id })
    if (!project) return res.status(404).json({ message: 'Project not found' })
    res.json({ project })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// PATCH /api/v1/projects/:id
router.patch('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true, runValidators: true }
    )
    if (!project) return res.status(404).json({ message: 'Project not found' })
    res.json({ project })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// DELETE /api/v1/projects/:id
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
    if (!project) return res.status(404).json({ message: 'Project not found' })
    res.json({ message: 'Project deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
