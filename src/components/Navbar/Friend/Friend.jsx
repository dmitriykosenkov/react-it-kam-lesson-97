import { NavLink, Route, Switch } from "react-router-dom";
import s from "./Friend.module.css";
import userPhoto from '../../../assets/images/user-photo.webp';


const Friend = (props) => {
  // debugger
  return (
    <div>
      <NavLink to={"/profile/" + props.id} className={s.friend}>
         <div>
            <img src={props.photo ? props.photo : userPhoto} alt="" />
         </div>
        <div className={s.name}>
          {props.name.length > 6 ? props.name.slice(0, 5) + "..." : props.name}
        </div>
      </NavLink>
    </div>
  );
};

export default Friend;
