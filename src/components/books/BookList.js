import React from 'react'
import SingleBookComponent from './SingleBookComponent.js'
import { Link } from 'react-router-dom'

const BookList = ({books}) => {

    return(
        <div className='book-list section'>

            { books && books.map(book => {
                return (
                    <Link to={'/book/' + book.id } key={book.id}>
                        <SingleBookComponent book={book} />
                    </Link>
                ) 
            })} 
        </div>
    )
}
export default BookList