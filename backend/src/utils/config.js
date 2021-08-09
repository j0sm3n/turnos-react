import 'dotenv/config'

let MONGODB_URI = process.env.MONGODB_URI

const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

if (process.env.NODE_ENV === 'development') {
  MONGODB_URI = process.env.MONGODB_URI_DEV
}

export { MONGODB_URI, MONGODB_OPTIONS }