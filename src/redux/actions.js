import axios from '../api';

//---------------------User---------------------//
export const signin = (payload) => async dispatch => {
   const user = await (await axios.post('/signin', payload)).data
   if(user===null){
      alert('invalid credentials')
   } else{
      dispatch({
         type:'SIGNED_IN',
         payload: user
      })
   }
}

export const signup = (payload) => async dispatch => {
   const user = await (await axios.post('/signup', payload)).data
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
export const getClients = (payload) => async dispatch => {
   const clients = await (await axios.post('/clients', payload)).data
   await dispatch({
      type: 'GET_CLIENTS',
      payload: clients
   })
}

export const sendMessage = (payload) => async dispatch => {
   dispatch({
      type:'MESSAGE',
      payload
   })
}