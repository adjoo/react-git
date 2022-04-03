import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {
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
            </div>

        </div>

    );
}


export default App;


