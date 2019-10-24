import React, { Component } from 'react'
import './Login.css'
import { Fab, TextField } from '@material-ui/core'
import logo from '../../assets/logo.png'
import { connect } from 'react-redux'
import { chooseLogin, isLogged } from '../../actions/actions'
 
class Login extends Component {
    state = {
        login: '',
        senha: '',
    }

    handleChange = e => {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleChoose = type => {
        this.props.chooseLogin(true)
    }

    handleLogin = () => {
        this.props.isLogged(true)
    }

    renderForm = () => {
        return (
            <form onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
                <div className="card">
                    <div>
                        <TextField
                            label="Login"
                            name="login"
                            className="text-field"
                            value={this.statelogin}
                            onChange={this.handleChange.bind(this)}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Senha"
                            name="senha"
                            className="text-field"
                            value={this.state.senha}
                            onChange={this.handleChange.bind(this)}
                            margin="normal"
                            type="password"
                        />
                    </div>
                    <div>
                        <Fab    type="submit" id="btn-custom"
                                variant="extended" aria-label="like" 
                                className="btn-extended" color="primary">
                            Submit
                        </Fab>
                    </div>
                </div>
            </form>
        )
    }

    renderLogin = () => {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <div className="card">
                    <Fab type="submit" id="btn-custom" onClick={() => this.handleChoose('aluno')}
                            variant="extended" aria-label="like" 
                            className="btn-extended" color="primary">
                        Aluno
                    </Fab>
                    <Fab type="submit" id="btn-custom" onClick={() => this.handleChoose('professor')}
                            variant="extended" aria-label="like" 
                            className="btn-extended" color="primary">
                        Professor
                    </Fab>
                </div>
            </form>
        )
    }

    renderContent = () => {
        if (!this.props.loginPage) {
            return this.renderLogin()
        } else {
            return this.renderForm()
        }
    }

    render() {
        return(
            <div className="login-container">
                <img src={logo} alt="logo" />
                <h1 className="title">Q-Academico</h1>
                {this.renderContent()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);