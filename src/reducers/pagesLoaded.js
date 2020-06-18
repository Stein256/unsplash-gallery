import { SET_PAGES_LOADED } from '../actions/types'

export default function pagesLoaded(state = 0, action) {
    switch (action.type) {
        case SET_PAGES_LOADED:
            return state + 1
        default:
            return state
    }
}
