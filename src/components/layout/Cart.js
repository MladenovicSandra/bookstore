import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import SingleBookCartComponent from '../books/SingleBookCartComponent.js'
import '../components.css'
import {Link } from 'react-router-dom'

const Cart = (props) => {
    if ( !props.auth.uid ) {
        return (
            <Redirect to='/signin' />
        )
    }
    let emptyList = ''
    let components = null
    let payPrice = null
    let proceed = null
    let total
    let tax = 0
    let subtotal = 0
    console.log(props.books)
    if(props.books.length < 1) {
        emptyList = <span className='cart-empty center'>The cart is empty</span>
    }
    else {
        components = props.books.map((element) => {
            return <SingleBookCartComponent
                id = {element.id}
                title = {element.title}
                price = {element.price}
            />
        })
        subtotal = props.books.map((element) => {
            let priceInt = element.price.substring(0,element.price.length-1)
            subtotal = subtotal + Number(priceInt)
            return subtotal
        })
        tax=Number(subtotal[subtotal.length-1])*(0.18)
        total=tax+Number(subtotal[subtotal.length-1])

        payPrice = <div className=' z-dept-0 col s12 m6' >
                        <div className='total-taxes'>
                        <span>Subtotal: {Number(subtotal[subtotal.length-1])}$</span>
                        <span>Estimated tax: {tax.toFixed(2)}$</span>
                        </div>
                        <hr></hr>
                        <span className='total'>Total: {total.toFixed(2)}$</span>
                    </div>

        proceed = <Link to='/checkout'>
                    <button className='right waves-effect waves-light btn blue lighten-2'>Proceed to checkout</button>
                </Link>

    }
    return (
        <div className='dashboard container'>
            {emptyList}
            {components}
            {payPrice}
            {proceed}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth : state.firebase.auth,
        books: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart)
