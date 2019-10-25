import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../store/actions/bookActions.js'
import { Redirect } from 'react-router-dom'

class AddNewBook extends Component {
    state = {
        title: '',
        author: '',
        pages: '',
        price: '',
        summary: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault() //da se zanemari default refresh na stranata so stiskanje na submit
        this.props.addBook(this.state)
        this.props.history.push('/')
    }

    render() {
        if ( !this.props.auth.uid ) {
            return (
                <Redirect to='/signin' />
            )
        }
        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit} className='teal lighten-5 z-depth-2'>
                    <h5 className='grey-text text-darken-3'> Add new book</h5>

                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' onChange={this.handleChange} />
                    </div>
                
                    <div className='input-field'>
                        <label htmlFor='pages'>Number of pages</label>
                        <input type='text' id='pages' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='price'>Price</label>
                        <input type='text' id='price' onChange={this.handleChange} />
                    </div>
 
                    <div className='input-field'>
                        <label htmlFor='summary'>Short summary</label>
                        <textarea id='summary' className='materialize-textarea' onChange={this.handleChange}  />
                    </div>

                    <div className='input-field'>
                        <button className='btn blue lighten-2 z-depth-0'>Add</button>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(addBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddNewBook)
