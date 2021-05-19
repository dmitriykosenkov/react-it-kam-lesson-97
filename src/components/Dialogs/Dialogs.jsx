import React from 'react';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import { Field, reduxForm, reset } from 'redux-form';
import { Textarea } from '../commons/FormControls/FormControls';
import { maxLengthCreator, required } from '../../validators/validators';

const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
   let messagesElements = props.messages.map(m => <Message message={m.message} />);

   const onSubmit = values => {
      props.addMessage(values.newDialogBody);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>
               {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={onSubmit} />
         </div>
      </div>
   )
}

const maxLength30 = maxLengthCreator(30);
const DialogsForm = (props) => {
   return (
      // handleSubmit приходит из reduxForm после оборачивания ею DialogsForm
      <form onSubmit={props.handleSubmit}>
         <div>
            {/* все онченжи и онклики уже находятся в redux-form, по этому внутри формы они не указываются  */}
            <Field component={Textarea} name="newDialogBody"
               validate={[required, maxLength30]} placeholder="New message" />
         </div>
         <div>
            <button >Add message</button>
         </div>
      </form>
   )
}
const afterSubmit = (result, dispatch) => dispatch(reset("newDialog"))
const DialogsReduxForm = reduxForm({ form: "newDialog", onSubmitSuccess: afterSubmit })(DialogsForm)

export default Dialogs;