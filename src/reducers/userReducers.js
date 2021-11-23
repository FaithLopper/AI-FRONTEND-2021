import { 
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_GET_PAYMENT_FAIL,
    USER_GET_PAYMENT_REQUEST,
    USER_GET_PAYMENT_SUCCESS,
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_SUB_PAYMENT_FAIL, 
    USER_SUB_PAYMENT_REQUEST, 
    USER_SUB_PAYMENT_SUCCESS, 
    USER_UPDATE_PROFILE_FAIL, 
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: return {loading: true}
        case USER_LOGIN_SUCCESS: return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL: return {loading: false, error: action.payload}
        case USER_LOGOUT: return {}
        default: return state
    }
}


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: return {loading: true}
        case USER_REGISTER_SUCCESS: return {loading: false, successRes: action.payload} //, userInfo: action.payload
        case USER_REGISTER_FAIL: return {loading: false, errorRes: action.payload}
        default: return state
    }
}


export const userProfileReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST: return {...state,loading: true}
        case USER_DETAILS_SUCCESS: return {loading: false, user: action.payload}
        case USER_DETAILS_FAIL: return {loading: false, error: action.payload}
        default: return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST: return {loading: true}
        case USER_UPDATE_PROFILE_SUCCESS: return {loading: false, successRes: action.payload}
        case USER_UPDATE_PROFILE_FAIL: return {loading: false, errorRes: action.payload}
        default: return state
    }
}

export const userGetPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_GET_PAYMENT_REQUEST: return {loading: true}
        case USER_GET_PAYMENT_SUCCESS: return {loading: false, info: action.payload}
        case USER_GET_PAYMENT_FAIL: return {loading: false, error: action.payload}
        default: return state
    }
}

export const userSubPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SUB_PAYMENT_REQUEST: return {loading: true}
        case USER_SUB_PAYMENT_SUCCESS: return {loading: false, successRes: action.payload}
        case USER_SUB_PAYMENT_FAIL: return {loading: false, errorRes: action.payload}
        default: return state
    }
}