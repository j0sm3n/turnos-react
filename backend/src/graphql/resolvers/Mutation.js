import Event from '../../models/Event'
import User from '../../models/User'
import Shift from '../../models/Shift'
import {UserInputError} from "apollo-server";

const Mutation = {
  createEvent: async (root, { date, agent, shift }) => {
    const newEvent = new Event({ date, agent, shift })
    try {
      await newEvent.save()
    } catch (e) {
      throw new UserInputError(e.message, {invalidArgs: args})
    }
    return newEvent
  },

  createUser: async (root, { name, email, cf, calendar }) => {
    const newUser = new User({ name, email, cf, calendar })
    try {
      await newUser.save()
    } catch (e) {
      throw new UserInputError(e.message, {invalidArgs: args})
    }
    return newUser
  },

  createShift: async (root, { name, start, end }) => {
    const newShift = new Shift({ name, start, end })
    try {
      await newShift.save()
    } catch (e) {
      throw new UserInputError(e.message, {invalidArgs: args})
    }
    return newShift
  },

  addCalendarToUser: async (root, args) => {
    const user = await User.findOne({ cf: args.cf })
    user.calendar = args.calendar
    try {
      await user.save()
    } catch (e) {
      throw new UserInputError(e.message, {invalidArgs: args})
    }
    return user
  }
}

export default Mutation