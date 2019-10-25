export const deleteBeacauseIsBought = ( id ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log(id)
        const firestore = getFirestore()
        firestore.collection('books').doc(id).delete().then(() => {
            console.log( 'Document successfully deleted!')
        }).catch(( error ) => {
            console.log('error')
        })
    }
}