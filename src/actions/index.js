import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENTS'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const responce = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch ({type: READ_EVENTS, responce})
}

export const postEvents = values => async dispatch => {
    const responce = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch ({type: CREATE_EVENT, responce})
}

export const putEvent = values => async dispatch => {
    const responce = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    dispatch ({type: UPDATE_EVENT, responce})
}

export const getEvent = id => async dispatch => {
    const responce = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch ({type: READ_EVENT, responce})
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch ({type: DELETE_EVENT, id})
}


