
export function cartReducer(state = {cart : []}, action) {
    switch(action.type) {
        case 'ADD_BOOK_TO_CART' : {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.book.id) {
                    return state
                }
            }
            const newArray = state.cart.slice()
            newArray.push({
                id: action.book.id,
                price: action.book.price,
                title: action.book.title
            })
            console.log('book added to cart', action.book)
            return {cart: newArray}
        }
        case 'REMOVE_BOOK_FROM_CART' : {
            const arrayWithDeletedElement = state.cart.filter((element) => {
                return element.id !== action.id
            })
            console.log('book deleted from cart')
            return {cart: arrayWithDeletedElement}
        }
        default : {
            return state
        }
    }
}