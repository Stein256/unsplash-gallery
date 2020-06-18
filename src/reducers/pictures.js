import produce from 'immer'
import { ADD_PICTURES } from '../actions/types'

export default function pictures(state = [], action) {
    switch (action.type) {
        case ADD_PICTURES:
            return produce(state, next => {
                next.push(...action.pictures)
            })
        default:
            return state
    }
}
