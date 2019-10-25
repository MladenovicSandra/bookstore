import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../../store/actions/authActions.js'
import { FaShoppingCart } from "react-icons/fa";
import '../components.css'

const SignedInLinks = (props) => {
    return (
        <ul className='right'>
            <li><NavLink to='./add' >Add Book</NavLink></li>
            <li><NavLink to='./cart' ><FaShoppingCart className='icon_item' /></NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='./' className='btn btn-floating blue lighten-3 z-depth-4 '>{props.profile.initials}</NavLink></li>

        </ul>
    )
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)