export const addBook = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make call to database
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const userId = getState().firebase.auth.uid
        firestore.collection('books').add({
            ...book, 
            postedByFirstName: profile.firstName,
            postedByLastName: profile.lastName,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_NEW_BOOK',
                book
            })
        }).catch((error) => {
            dispatch({
                type: 'ADD_BOOK_ERROR',
                error
            })
        }) 
    }
}