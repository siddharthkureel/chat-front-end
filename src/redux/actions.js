import axios from '../api'

//---------------------User---------------------//
export const signin = (payload) => async dispatch => {
   const user = await (await axios.post('/user', payload)).data
   dispatch({
      type:'SIGNED_IN',
      payload: user
   })
}

export const chatroom = (payload) => async dispatch => {
   const chatroom = await (await axios.post('/chatroom', payload)).data
   const messages = await (await axios.get(`/messages/${chatroom._id}`)).data
   await dispatch({
      type: 'CHAT',
      payload: {
         ...chatroom,
         messages
      }
   })
}

export const sendMessage = (payload) => async dispatch => {
   dispatch({
      type:'MESSAGE',
      payload
   })
}