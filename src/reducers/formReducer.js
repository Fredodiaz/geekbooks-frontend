import { HAS_ACCOUNT, IS_FORM_OPEN } from '../actions/types'

const initialState = {
    hasAccount: true,
    isFormOpen: false,
}

export default function(state=initialState, action){
    switch(action.type) {
        case IS_FORM_OPEN:
            return {
                ...state,
                isFormOpen: !state.isFormOpen
            }
        case HAS_ACCOUNT:
            return {
                ...state,
                hasAccount: !state.hasAccount
            }
        default:
            return state;
    }
}