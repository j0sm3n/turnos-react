import Event from '../../models/Event'

const User = {
  events: async ({ _id }) => {
    return Event.find({ agent: _id })
  }
}

export default User