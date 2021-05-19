import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Dialog = (props) => {
   let path = `/dialogs/${props.id}`
   return (
      <div>
         <NavLink to={path} className={s.dialog} activeClassName={s.activeLink}>
            {props.name}
         </NavLink>
      </div>
   )
}

export default Dialog;