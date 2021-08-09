import { Schema, model } from 'mongoose'

const shiftSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  start: {
    type: String
  },
  end: {
    type: String
  }
})

export default model('Shift', shiftSchema)