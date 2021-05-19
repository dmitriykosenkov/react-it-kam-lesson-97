import React from "react";
import { connect } from 'react-redux';
import { getFriendsThunkCreator } from "../../redux/sidebar-reducer";
import Navbar from './Navbar';
import Preloader from "../commons/preloader/preloader";
class NavbarClass extends React.Component {
   componentDidMount() {
      this.props.getFriendsThunkCreator(this.props.pageSize)
   }
   render() {
      // debugger
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Navbar
            friends={this.props.friends}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      friends: state.sidebar.friends,
      pageSize: state.sidebar.pageSize,
      isFetching: state.sidebar.isFetching
   }
}

const NavbarContainer = connect(mapStateToProps, { getFriendsThunkCreator })(NavbarClass)

export default NavbarContainer;