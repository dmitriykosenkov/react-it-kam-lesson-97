import s from './Post.module.css';


const Post = (props) => {
   return (
      <div className={s.active}>
         <div className={s.avatar}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg" alt="" />
         </div>
         <div className={s.message}>
            {props.message}
         </div>
         <div>
            <span>{props.likeCount} likes</span>
         </div>
      </div>
   )


}

export default Post;