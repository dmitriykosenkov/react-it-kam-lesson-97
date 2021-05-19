import { NavLink } from 'react-router-dom';
import Clock from '../clock/Clock';
import s from './Header.module.css';

const Header = (props) => {
   return (
      <header className={s.header}>
         <img src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/technology-logo-maker-lp/online-logo-design-template-for-an-eco-tech-company-2176l-206-el-1024x1024.png" alt="" />
         <Clock />
         <div >
            {props.isAuth ? <div><NavLink to="/profile" className={s.login}>{props.login}</NavLink>
                                 <div>
                                    <button className={s.logout} onClick={props.logoutThunkCreator}>Logout</button>
                                 </div>
                              </div>
                           : <NavLink to="/login" className={s.login}>Login</NavLink>}
         </div>
      </header>
   )
}

export default Header;