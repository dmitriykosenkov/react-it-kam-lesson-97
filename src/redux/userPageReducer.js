import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let defaultState = {
   users: [],
   pageSize: 10,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: []
}
const userPageReducer = (state = defaultState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {
                     ...u, followed: true
                  }
               }
               return u
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         };
      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         };
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         };
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         };
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         };
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         };
      default:
         return state;
   }
}

export const followSuccsess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccsess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const setTotalUsersCount = (users) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: users })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (getUserPage, pageSize) => {
   return async (dispatch) => {
      dispatch(setCurrentPage(getUserPage));
      dispatch(toggleIsFetching(true));
      const data = await usersAPI.getUsers(getUserPage, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
   }
}

export const followThunkCreator = (userId) => {
   return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      const data = await usersAPI.follow(userId);
      if (data.resultCode === 0) {
         dispatch(followSuccsess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
   }
}

export const unfollowThunkCreator = (userId) => {
   return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      const data = await usersAPI.unfollow(userId)
      if (data.resultCode === 0) {
         dispatch(unfollowSuccsess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
   }
}



export default userPageReducer;