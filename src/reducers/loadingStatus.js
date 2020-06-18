import { SET_LOADING_STATUS } from '../actions/types'

export default function loadingStatus(state = false, action) {
    switch (action.type) {
        case SET_LOADING_STATUS:
            return action.isLoading
        default:
            return state
    }
}
