import _ from 'lodash'
import {
    CREATE_EVENT,
    READ_EVENT,
    READ_EVENTS,
    UPDATE_EVENT,
    DELETE_EVENT
} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case UPDATE_EVENT:
        case READ_EVENT:
            const data = action.responce.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            return _.mapKeys(action.responce.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events;
    }
}