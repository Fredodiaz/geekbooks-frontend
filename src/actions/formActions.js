import { HAS_ACCOUNT, IS_FORM_OPEN } from './types'

export const toggleForm = () => ( dispatch ) => {
    dispatch({ type: IS_FORM_OPEN })
}

export const hasAccount = () => ( dispatch ) => {
    dispatch({ type: HAS_ACCOUNT })
}