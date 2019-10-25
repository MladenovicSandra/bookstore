import React from 'react'
import Notifications from './Notifications.js'
import BookList from '../books/BookList.js'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {

    render() {
        const { books, notifications } = this.props
        if ( !this.props.auth.uid ) {
            return (
                <Redirect to='/signin' />
            )
        }
        return(
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <BookList books = {books}/>
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications notifications = {notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.firestore.ordered.books,
        auth : state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'books', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
    ])
)(Home)