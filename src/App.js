import React from "react";
import logo from './logo.svg';
import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UserPageContainer from './components/UserPage/UserPageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/commons/preloader/preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends React.Component {
   componentDidMount() {
      this.props.initializeApp()
   }
   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }
      return (
         <div className="app-wrapper">
            <HeaderContainer />
            <NavbarContainer store={this.props.store} />
            <div className="app-wrapper-content">
               <div className="app-wrapper-content-inner">
                  <Route path='/dialogs' render={() => <DialogsContainer />} />
                  <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                  <Route path='/userpage' render={() => <UserPageContainer />} />
                  <Route path='/music' render={() => <Music />} />
                  <Route path='/news' render={() => <News />} />
                  <Route path='/settings' render={() => <Settings />} />
                  <Route path='/login' render={() => <Login />} />
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized
   }
}
let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const MainApp = (props) => {
   return (
      <React.StrictMode>
         <BrowserRouter>
            <Provider store={store}>
               <AppContainer />
            </Provider>
         </BrowserRouter>
      </React.StrictMode>
   )
}
export default MainApp;

