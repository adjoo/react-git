import './App.css';
import React from 'react'
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {globalAppError, initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        this.props.globalAppError(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        const globalError = this.props.globalError
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app__wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app__wrapper__content">
                    <div className={globalError && 'globalErrorMessage'}>{globalError}</div>
                    <Switch>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/news' component={News}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' render={withSuspense(Login)}/>
                        <Route path='/' exact render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='*' render={() => <div>404 not found</div>}/>
                    </Switch>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
});
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, globalAppError}))(App);

let SamuraiApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}


export default SamuraiApp