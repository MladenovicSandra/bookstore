const initState = {
    books: []
}
const bookReducer = (state = initState, action) => {

    switch(action.type){
        case 'ADD_NEW_BOOK' : {
            console.log('book added', action.book)
            return state
        }
        case 'ADD_BOOK_ERROR' : {
            console.log('add book error', action.error)
            return state
        }
        default : 
            return state
    }
}

export default bookReducer