export const signIn = (credentials) => {
    return(dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: "LOG_IN_SUCCESS"})
        }).catch((error) => {
            dispatch({ type: "LOG_IN_ERROR", error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGN_OUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGN_UP_SUCCESS'})
        }).catch((error) => {
            dispatch({ type: 'SIGN_UP_ERROR', error })
        })
    }
}