import React from 'react';
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import { connect } from 'react-redux'
import { chooseLogin, isLogged } from './actions/actions'

class App extends React.Component {

  routes = () => {
    if (this.props.logged) {
      return <Home />
    } else {
      return <Login />
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.routes()}
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);