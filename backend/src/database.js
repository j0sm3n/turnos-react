import mongoose from 'mongoose'
import {MONGODB_URI, MONGODB_OPTIONS} from './utils/config'

mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err))