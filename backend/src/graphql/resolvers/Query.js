import Event from '../../models/Event'
import User from '../../models/User'
import Shift from '../../models/Shift'


const Query = {
  events: async () => Event.find(),
  users: async () => User.find(),
  shifts: async () => Shift.find(),
  findShift: async (root, args) => Shift.findOne({name: args.name})
}

export default Query