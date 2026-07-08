import mongoose from 'mongoose'

const aiToolSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  emoji: { type: String, default: '🤖' },
  description: { type: String },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  model: { type: String, default: 'GPT-4o' },
  systemPrompt: { type: String },
  promptTemplate: { type: String },
  temperature: { type: Number, default: 0.7, min: 0, max: 2 },
  maxTokens: { type: Number, default: 1024 },
  status: { type: String, enum: ['active', 'draft', 'archived'], default: 'draft' },
  callCount: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.model('AiTool', aiToolSchema)
