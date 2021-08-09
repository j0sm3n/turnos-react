import { Schema, model } from 'mongoose'

const eventSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  agent: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  shift: {
    type: Schema.Types.ObjectId,
    ref: 'Shift'
  }
})

export default model('Event', eventSchema)