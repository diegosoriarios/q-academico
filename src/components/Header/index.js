import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chooseLogin, isLogged } from '../../actions/actions'
import './Header.css'

class Header extends Component {

    handleRightButton = () => {
        if(this.props.loginPage) this.props.chooseLogin(false)
    }

    render() {
        return (
            <div>
                <button className="right" onClick={() => this.handleRightButton()} style={{display: !this.props.loginPage && this.props.logged ? "none" : "block"}}>
                    ←
                </button>
                <div className="center">
                    
                </div>
                
                <div className="left">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginPage: state.chooseLogin,
        logged: state.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chooseLogin: (bool) => dispatch(chooseLogin(bool)),
        isLogged: (bool) => dispatch(isLogged(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);