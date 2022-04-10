import './App.css';
import React from 'react'
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) return <Preloader/>
        return (
            <div className='app__wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app__wrapper__content">
                    <Route path='/' component={Navbar} exact/>
                    <Route path='/dialogs' component={DialogsContainer}/>
                    <Route path='/profile/' exact component={ProfileContainer}/>
                    <Route path='/profile/:userId' component={ProfileContainer}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/login' component={Login}/>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


