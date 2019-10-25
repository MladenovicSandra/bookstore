const initState = {
    authError : null
}

const authReducer = (state = initState, action) => {

    switch(action.type){
        case 'LOG_IN_ERROR' : {
            return {
                ...state , 
                authError: 'Login Failed'
            }
        }
        case 'LOG_IN_SUCCESS' : {
            console.log('Login success')
            return {
                ...state,
                authError: null
            }
        }
        case 'SIGN_OUT_SUCCESS' : {
            console.log('User sign out')
            return state
        }
        case 'SIGN_UP_SUCCESS' : {
            console.log('Sign up success')
            return {
                ...state,
                authError: null
            }
        }
        case 'SIGN_UP_ERROR' : {
            return {
                ...state , 
                authError: action.error.message
            }
        }
        default :
            return state
    }
}
export default authReducer