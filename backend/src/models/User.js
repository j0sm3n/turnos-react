import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 8
  },
  cf: {
    type: Number,
    required: true,
    unique: true
  },
  calendar: {
    type: String
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
})

export default model('User', userSchema)