import { SET_LOADING_STATUS } from './types'

export default function setLoadingStatus(isLoading) {
    return {
        type: SET_LOADING_STATUS,
        isLoading,
    }
}
