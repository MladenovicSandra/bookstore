import React from 'react'
import moment from 'moment'
import '../components.css'

const SingleBookComponent = ({book}) => {
    return(
        <div className='card z-dept-0 single-book'>
                <div className='card-content grey-text text-darken-3 teal lighten-5 card-panel hoverable'>
                    <span className='card-title '>{book.title}</span>
                    <p className='price-single-component'>Price: {book.price}</p>
                    <span className='grey-text'>Posted by {book.postedByFirstName + ' ' +  book.postedByLastName}</span>
                    <p className='grey-text'>{moment(book.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default SingleBookComponent