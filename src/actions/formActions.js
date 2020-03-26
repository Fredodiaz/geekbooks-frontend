import { HAS_ACCOUNT, IS_FORM_OPEN } from './types'

export const toggleForm = () => ( dispatch ) => {
    console.log('dispatch')
    dispatch({ type: IS_FORM_OPEN })
}

export const hasAccount = () => ( dispatch ) => {
    console.log('dispatch')
    dispatch({ type: HAS_ACCOUNT })
}