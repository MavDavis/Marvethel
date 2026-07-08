import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  type: { type: String, enum: ['saas', 'startup', 'ecommerce', 'other'], default: 'saas' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['active', 'draft', 'archived'], default: 'active' },
  color: { type: String, default: '#D6FF01' },
  emoji: { type: String, default: '🚀' },
}, { timestamps: true })

export default mongoose.model('Project', projectSchema)
