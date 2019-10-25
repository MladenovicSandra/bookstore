import authReducer from './authReducer.js'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import  bookReducer  from './bookReducer.js'
import { cartReducer } from './cartReducer.js';

const rootReducer = combineReducers({
    book: bookReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart : cartReducer
})

export default rootReducer