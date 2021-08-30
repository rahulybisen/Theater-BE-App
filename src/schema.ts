export const typeDefs = `
"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

type Ticket implements Node {
  id: ID!
  customerName: String   
  performanceTitle: String   
  performanceTime: String   
  ticketPrice: Int
  isActive: Boolean
  createdAt: String
  updatedAt: String
  month: Int
}

input TicketWhereUniqueInput {
  id: ID!
}

input TicketUpdateInput {
  customerName: String   
  performanceTitle: String   
  performanceTime: String   
  ticketPrice: Int
  isActive: Boolean
}

input TicketWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TicketWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TicketWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TicketWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  customerName: String
  """
  All values that are not equal to given value.
  """
  customerName_not: String
  """
  All values that are contained in given list.
  """
  customerName_in: [String!]
  """
  All values that are not contained in given list.
  """
  customerName_not_in: [String!]
  """
  All values less than the given value.
  """
  customerName_lt: String
  """
  All values less than or equal the given value.
  """
  customerName_lte: String
  """
  All values greater than the given value.
  """
  customerName_gt: String
  """
  All values greater than or equal the given value.
  """
  customerName_gte: String
  """
  All values containing the given string.
  """
  customerName_contains: String
  """
  All values not containing the given string.
  """
  customerName_not_contains: String
  """
  All values starting with the given string.
  """
  customerName_starts_with: String
  """
  All values not starting with the given string.
  """
  customerName_not_starts_with: String
  """
  All values ending with the given string.
  """
  customerName_ends_with: String
  """
  All values not ending with the given string.
  """
  customerName_not_ends_with: String
  performanceTitle: String
  """
  All values that are not equal to given value.
  """
  performanceTitle_not: String
  """
  All values that are contained in given list.
  """
  performanceTitle_in: [String!]
  """
  All values that are not contained in given list.
  """
  performanceTitle_not_in: [String!]
  """
  All values less than the given value.
  """
  performanceTitle_lt: String
  """
  All values less than or equal the given value.
  """
  performanceTitle_lte: String
  """
  All values greater than the given value.
  """
  performanceTitle_gt: String
  """
  All values greater than or equal the given value.
  """
  performanceTitle_gte: String
  """
  All values containing the given string.
  """
  performanceTitle_contains: String
  """
  All values not containing the given string.
  """
  performanceTitle_not_contains: String
  """
  All values starting with the given string.
  """
  performanceTitle_starts_with: String
  """
  All values not starting with the given string.
  """
  performanceTitle_not_starts_with: String
  """
  All values ending with the given string.
  """
  performanceTitle_ends_with: String
  """
  All values not ending with the given string.
  """
  performanceTitle_not_ends_with: String
  performanceTime: String
  """
  All values that are not equal to given value.
  """
  performanceTime_not: String
  """
  All values that are contained in given list.
  """
  performanceTime_in: [String!]
  """
  All values that are not contained in given list.
  """
  performanceTime_not_in: [String!]
  """
  All values less than the given value.
  """
  performanceTime_lt: String
  """
  All values less than or equal the given value.
  """
  performanceTime_lte: String
  """
  All values greater than the given value.
  """
  performanceTime_gt: String
  """
  All values greater than or equal the given value.
  """
  performanceTime_gte: String
  """
  All values containing the given string.
  """
  performanceTime_contains: String
  """
  All values not containing the given string.
  """
  performanceTime_not_contains: String
  """
  All values starting with the given string.
  """
  performanceTime_starts_with: String
  """
  All values not starting with the given string.
  """
  performanceTime_not_starts_with: String
  """
  All values ending with the given string.
  """
  performanceTime_ends_with: String
  """
  All values not ending with the given string.
  """
  performanceTime_not_ends_with: String
  ticketPrice: Int
  """
  All values that are not equal to given value.
  """
  ticketPrice_not: Int
  """
  All values that are contained in given list.
  """
  ticketPrice_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ticketPrice_not_in: [Int!]
  """
  All values less than the given value.
  """
  ticketPrice_lt: Int
  """
  All values less than or equal the given value.
  """
  ticketPrice_lte: Int
  """
  All values greater than the given value.
  """
  ticketPrice_gt: Int
  """
  All values greater than or equal the given value.
  """
  ticketPrice_gte: Int
  """
  All values containing the given string.
  """
  ticketPrice_contains: Int
  """
  All values not containing the given string.
  """
  ticketPrice_not_contains: Int
  """
  All values starting with the given string.
  """
  ticketPrice_starts_with: Int
  """
  All values not starting with the given string.
  """
  ticketPrice_not_starts_with: Int
  """
  All values ending with the given string.
  """
  ticketPrice_ends_with: Int
  """
  All values not ending with the given string.
  """
  ticketPrice_not_ends_with: Int
  isActive: Boolean
  """
  All values that are not equal to given value.
  """
  isActive_not: Boolean
  createdAt: String
  """
  All values that are not equal to given value.
  """
  createdAt_not: String
  """
  All values that are contained in given list.
  """
  createdAt_in: [String!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [String!]
  """
  All values less than the given value.
  """
  createdAt_lt: String
  """
  All values less than or equal the given value.
  """
  createdAt_lte: String
  """
  All values greater than the given value.
  """
  createdAt_gt: String
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: String
  updatedAt: String
  """
  All values that are not equal to given value.
  """
  updatedAt_not: String
  """
  All values that are contained in given list.
  """
  updatedAt_in: [String!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [String!]
  """
  All values less than the given value.
  """
  updatedAt_lt: String
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: String
  """
  All values greater than the given value.
  """
  updatedAt_gt: String
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: String
}

enum TicketOrderByInput {
  id_ASC
  id_DESC
  customerName_ASC
  customerName_DESC
  performanceTitle_ASC
  performanceTitle_DESC
  performanceTime_ASC
  performanceTime_DESC
  ticketPrice_ASC
  ticketPrice_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TicketWithCount {
  edges: [Ticket]
  aggregate: AggregatTicket
}

type AggregatTicket {
  count: Int!
}

input TicketCreateInput {
  customerName: String!
  performanceTitle: String!
  performanceTime: String! 
  ticketPrice: Int!
  isActive: Boolean
}

type MonthWiseEarnData {
  month: String
  summaryProfit: Int
}

type MonthWisVisiteData {
  month: String
  summaryVisits: Int
}

input DateInput{
  fromDate: String!,
  toDate: String!
  method: MethodType!
}

enum MethodType {
  aggregation
  algorithms
}

type Mutation {
  createTicket(data: TicketCreateInput!): Ticket!
  updateTicket(data: TicketUpdateInput!, where: TicketWhereUniqueInput!): Ticket
  deleteTicket(where: TicketWhereUniqueInput!): String
}

type Query {
  tickets(where: TicketWhereInput, orderBy: TicketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TicketWithCount!
  ticket(where: TicketWhereUniqueInput!): Ticket
  moneyEarndByTheater(where:DateInput):[MonthWiseEarnData]
  visited(where:DateInput):[MonthWisVisiteData]
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}
`

