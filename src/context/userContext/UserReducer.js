/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-anonymous-default-export

// عبارة عن جملة سويتش لمناقشة كل حالة وفي كل حالة نقوم بتعديلات على السياق بحسب الحالة
export default (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                user: action.payload,
                isAuthed:true
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                user:null,
                isAuthed:false
            }
        case 'LOAD_USER':
            return {
                ...state,
                user:action.payload
                
            }
        case 'LOG_OUT':
            return {
                ...state,
                user:null,
                isAuthed:false
            }
        case 'signed':
            return {
                ...state,
                signedup:true
            }
        case 'removeSignedUp':
            return {
                ...state,
                signedup:false
            }
        case 'GET_RES':
            return {
                ...state,
                reservations:action.payload
            }
        case 'GET_RES_BY_ID':
            return {
                ...state,
                reservation:action.payload
            }

        default:
            return state
    }
}