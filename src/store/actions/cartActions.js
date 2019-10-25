export function addBookToCart( book) {
    return function ( dispatch ) {
        dispatch({
            type: 'ADD_BOOK_TO_CART',
            book: book
        })
    }
}

export function removeBookFromCart (id) {
    return function ( dispatch ) {
        dispatch ({
            type: 'REMOVE_BOOK_FROM_CART',
            id: id
        })
    }
}