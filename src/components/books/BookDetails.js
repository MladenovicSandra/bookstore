import React from 'react'
import '../components.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import {addBookToCart} from '../../store/actions/cartActions.js'
import {store} from '../../index.js'

const BookDetails = (props) => {
    
    const { book } = props
    if ( !props.auth.uid ) {
        return (
            <Redirect to='/signin' />
        )
    }
    if( book ) {
        let title = props.book.title
        let price = props.book.price
        let id = props.bookId
        let bookToBuy = {
            title: title,
            price: price, 
            id: id
        }
        console.log(bookToBuy)
        return (
            <div className='container section book-details'>
            <div className='card z-depth-1 '>
                <div className='card-content teal lighten-5'>
                    <span className='card-title'>{book.title}</span>
                    <div className='details'>
                        <span className='author'>Author: {book.author}</span>
                        <span className='details-item'>Number of pages: {book.pages}</span>
                        <p className='details-item'>{book.summary}</p>
                        <p className='price'>Price: {book.price}</p>
                    </div>
                    <button className="waves-effect  blue lighten-2 btn-small" onClick={() => store.dispatch(addBookToCart({
                        price: bookToBuy.price,
                        id: bookToBuy.id,
                        title: bookToBuy.title
                    }))} >Add to cart</button>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by {book.postedByFirstName + ' ' +  book.postedByLastName}</div>
                    <div>{moment(book.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )
    }
    else {
        return (
            <div className='container center'>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div> 
        )
    }
  
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const books = state.firestore.data.books
    const book = books ? books[id] : null
    return {
        book: book,
        auth : state.firebase.auth,
        bookId: id
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'books'}
    ])
)(BookDetails)


