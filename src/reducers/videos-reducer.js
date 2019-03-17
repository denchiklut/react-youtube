import {FETCH_VIDEO} from "../actions";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_VIDEO: return action.payload

        default: return state
    }
}