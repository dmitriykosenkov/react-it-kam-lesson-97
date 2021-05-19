import React from "react";
import {
   followThunkCreator,
   setTotalUsersCount,
   unfollowThunkCreator,
   getUsersThunkCreator,
   toggleFollowingProgress
} from "../../redux/userPageReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from './Users';
import Preloader from "../commons/preloader/preloader";
import withAuthRedirectComponent from "../../hoc/authRedirect";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUserPageReselect } from "../../redux/users-selector";

class UserPage extends React.Component {
   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
   }
   onPageChanged = (pageNumber) => {
      this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            followThunkCreator={this.props.followThunkCreator}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUserPageReselect(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default compose(
   connect(mapStateToProps,
      {getUsersThunkCreator, followThunkCreator, unfollowThunkCreator,setTotalUsersCount, toggleFollowingProgress}),
   withAuthRedirectComponent
)(UserPage)