import React from "react";
import profilePageReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";


let state = {
   posts: [
      { id: 1, post: "Hi! How are you?", likeCount: 10 },
      { id: 2, post: "I'm fine! Thanks! And you?", likeCount: 11 },
      { id: 3, post: "I study React", likeCount: 12 }
   ]
}
test('new post should be added', () => {
   let action = addPostActionCreator("Hello")
   let newPost = profilePageReducer(state, action);
   expect(newPost.posts.length).toBe(4)
});
test(`new message should be "Hello"`, () => {
   let action = addPostActionCreator("Hello");
   let newMessage = profilePageReducer(state, action);
   expect(newMessage.posts.id === 4).toBe(newMessage.posts.post === "Hello" )
})
test(`post should be deleted`, () => {
   let action = deletePostActionCreator(1);
   let deletePost = profilePageReducer(state, action);
   expect(deletePost.posts.length).toBe(2);
})