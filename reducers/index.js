import { combineReducers } from 'redux'


function name(state = '', action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.name
    case 'REHYDRATE_CUSTOMER_DETAILS':
      return action.name
    default:
      return state
  }
}

function accountNumber(state = '', action) {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_NUMBER':
      return action.number
    case 'REHYDRATE_CUSTOMER_DETAILS':
      return action.name
    default:
      return state
  }
}

function composingMessage(state = '', action) {
  switch (action.type) {
    case 'UPDATE_COMPOSE_MESSAGE':
      return action.message
    case 'SEND_MESSAGE':
      return ''
    default:
      return state
  }
}

function messages(state = [], action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [
        ...state,
        { message: action.message, timestamp: action.timestamp, isOwnMessage: true}
      ]
    case 'RECEIVED_MESSAGE':
      return [
        ...state,
        action.message
      ]
    default:
      return state
  }
}

const chatNowReducers = combineReducers({
  name,
  accountNumber,
  composingMessage,
  messages
})

export default chatNowReducers
