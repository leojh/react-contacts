import { map, filter } from 'ramda'

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact]
    default:
      return state
  }
}

export default contacts
