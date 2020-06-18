import { ADD_PICTURES } from './types'

export default function addPictures(pictures) {
    return {
        type: ADD_PICTURES,
        pictures,
    }
}
