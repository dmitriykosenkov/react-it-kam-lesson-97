import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import Friend from "./Friend/Friend";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  const links = [
    { url: "/profile", link: "Profile" },
    { url: "/dialogs", link: "Messages" },
    { url: "/userpage", link: "Userpage" },
    { url: "/news", link: "News" },
    { url: "/music", link: "Music" },
    { url: "/settings", link: "Settings" },
  ];
  let link = links.map((l) => {
    return (
      <div className={s.item}>
        <NavLink to={l.url} activeClassName={s.activeLink}>
          {l.link}
        </NavLink>
      </div>
    );
  });
  // let friendElements = props.friends.map(friend => <Friend name={friend.name} src={friend.src} />)
  return (
    <nav className={s.nav}>
      {link}
      <h3 className={s.titleFriends}>Friends</h3>
      <div className={s.friends}>
        {props.friends.map((f) => (
          <Friend name={f.name} photo={f.photos.small} key={f.id} id={f.id} />
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
