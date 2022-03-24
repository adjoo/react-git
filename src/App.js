import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app__wrapper'>
            <Header/>
            <Navbar/>
            <div className="app__wrapper__content">
                <Route path='/' component={Navbar} exact/>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsReducer} dispatch={props.dispatch}/>}/>
                <Route path='/profile' render={() => <Profile postsPage={props.state.profileReducer} dispatch={props.dispatch}/>}/>
                <Route path='/news' component={News}/>
            </div>

        </div>

    );
}


export default App;


