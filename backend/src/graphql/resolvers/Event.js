import Shift from '../../models/Shift'
import User from '../../models/User'

const Event = {
  agent: async ({ agent }) => {
    return User.findById(agent);
  },
  shift: async ({ shift }) => {
    return Shift.findById(shift)
  }
}

export default Event