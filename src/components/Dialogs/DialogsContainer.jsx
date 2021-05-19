import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirectComponent from '../../hoc/authRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
   return {
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      dialogs: state.dialogsPage.dialogs
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (newDialogBody) => {
         dispatch(addMessageActionCreator(newDialogBody));
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirectComponent
)(Dialogs)