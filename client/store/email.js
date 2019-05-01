import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SEND_EMAIL = 'SEND_EMAIL'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const sendEmail = emailObjSent => ({type: SEND_EMAIL, emailObjSent})

/**
 * THUNK CREATORS
 */
export const sendFunc = emailObj => async dispatch => {
  console.log('here')
  console.log(emailObj)
  try {
    const res = await axios.post('/api/email', emailObj)
    dispatch(sendEmail(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return action.emailObjSent
    default:
      return state
  }
}
