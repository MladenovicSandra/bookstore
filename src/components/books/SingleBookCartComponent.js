import React from 'react'
import { connect } from 'react-redux'
import { removeBookFromCart } from '../../store/actions/cartActions.js'

const SingleBookCartComponent = (props) => {
    console.log(props)
    return (
        <div className='card z-dept-0 single-book col s12 m6'>
            <div className='card-content grey-text text-darken-3 white'>
                <span className='card-title '>{props.title}</span>
                <p className='price-single-component left'>Price: {props.price}</p>
                <button className='right waves-effect waves-light btn blue lighten-2' onClick={() => props.removeFromCart(props.id)}>Remove</button>
                <br></br>
            </div>
        </div>
    )
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        removeFromCart : (id) => dispatch(removeBookFromCart(id))
    }
}

export default connect(null, mapDispatchToProps)(SingleBookCartComponent)
