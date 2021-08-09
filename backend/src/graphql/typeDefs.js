import { gql } from 'apollo-server'

const typeDefs = gql `
    type Query {
        events: [Event!]
        users: [User!]
        shifts: [Shift!]
        findShift(name: String!): Shift
    }
    
    type User {
        _id: ID!
        name: String!
        email: String!
        cf: Int!
        calendar: String
        events: [Event!]
    }
    
    type Shift {
        _id: ID!
        name: String!
        start: String
        end: String
    }

    type Event {
        _id: ID!
        date: Date!
        agent: User!
        shift: Shift!
    }
    
    scalar Date
    
    type Mutation {
        createEvent(date: String!, agent: String!, shift: String!): Event
        createUser(name: String!, email: String!, cf: Int!, calendar: String): User
        createShift(name: String!, start: String, end: String): Shift
        addCalendarToUser(cf: Int!, calendar: String!): User
    }
`

export default typeDefs