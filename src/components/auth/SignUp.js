import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions.js'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault() //da se zanemari default refresh na stranata so stiskanje na submit
        this.props.signUp(this.state)
    }

    render() {
        let authError = this.props.authError
        if ( this.props.auth.uid ) {
            return (
                <Redirect to='/' />
            )
        }

        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit} className='teal lighten-5 z-depth-2'>
                    <h5 className='grey-text text-darken-3'> Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <button className='btn blue lighten-2 z-depth-0'>Sign Up</button>
                        <div className='red-text center'>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        auth : state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)