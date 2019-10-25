import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBeacauseIsBought } from '../../store/actions/deleteActions.js'
import { removeBookFromCart } from '../../store/actions/cartActions.js'

class Checkout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cardNumber: '',
            nameOnCard: '',
            expiration: '',
            cvc: '',
            successfull: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    deleteItems = ( cart ) => {
        console.log(cart)
        for (let i=0; i<cart.length; i++){
            this.props.delete(cart[i].id)
            this.props.removeFromCart(cart[i].id)
        }
        this.props.history.push('/')
    }
    render () {
        if ( !this.props.auth.uid ) {
            return (
                <Redirect to='/signin' />
            )
        }
        console.log(this.props.cart)
        console.log(this.props) 
        return (
            <div  className='container' >
                    <form className='teal lighten-5 z-depth-2' onSubmit={this.handleChange}>
                        <h5 className='grey-text text-darken-3'> Card details</h5>
                        <div className='input-field'>
                            <label htmlFor='cardNumber'>Card number</label>
                            <input type='text' id='cardNumber' onChange={this.handleChange} />
                        </div>

                        <div className='input-field'>
                            <label htmlFor='nameOnCard'>Name on card</label>
                            <input type='text' id='nameOnCard' onChange={this.handleChange} />
                        </div>

                        <div className='input-field'>
                            <label htmlFor='expiration'>Expiration date</label>
                            <input type='text' id='expiration' onChange={this.handleChange} />
                        </div>

                        <div className='input-field'>
                            <label htmlFor='cvc'>CVC (Security code)</label>
                            <input type='password' id='cvc' onChange={this.handleChange} />
                        </div>

                        
                    </form>
                    <div className='input-field'>
                            <button className='waves-effect waves-light btn blue lighten-2' onClick={() => this.deleteItems(this.props.cart)}>
                                Confirm and Pay
                            </button>
                        </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(deleteBeacauseIsBought(id)),
        removeFromCart: (id) => dispatch(removeBookFromCart(id))
    }
}

const mapStateToProps = ( state ) => {
    return {
        cart: state.cart.cart,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
