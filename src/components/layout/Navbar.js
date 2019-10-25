import React from 'react'
import {Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'
import { connect } from 'react-redux'


const Navbar = (props) => {
    //console.log(props)
    let component = null
    if(props.auth.uid){
        component = <SignedInLinks profile={props.profile} />
    }
    else {
        component = <SignedOutLinks />
    }
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo left' >
                    <span className='book'>book</span><span className='store'>store</span>
                </Link>
                {component} 
            </div>
        </nav>
    )
}

const mapStateToProps =(state) => {
    //console.log(state)
    return {
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)