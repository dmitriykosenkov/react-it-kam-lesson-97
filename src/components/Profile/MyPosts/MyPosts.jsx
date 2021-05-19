import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator, required } from '../../../validators/validators';
import { Textarea } from '../../commons/FormControls/FormControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
   let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id} />);

   const onSubmit = formData => {
      console.log(formData);
      props.addPost(formData.newPost);
   }

   return (
      <div className={s.postsBlock}>
         <h3>Posts</h3>
         <div>
            <NewPostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   )
}

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} name={"newPost"}
               validate={[required, maxLength10]} placeholder={"Add new post"} />
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
}
const afterSubmit = (result, fdsfds) => fdsfds(reset("newPost"))

const NewPostReduxForm = reduxForm({ form: "newPost", onSubmitSuccess: afterSubmit })(AddNewPostForm);

export default MyPosts;