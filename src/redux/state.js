import dialogPageReducer from "./dialog-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, post: "Hi! How are you?", likeCount: 10 },
            { id: 2, post: "I'm fine! Thanks! And you?", likeCount: 11 },
            { id: 3, post: "I study React", likeCount: 12 }
         ],
         newPostText: ""
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Дима" },
            { id: 2, name: "Лена" },
            { id: 3, name: "Андрей" },
            { id: 4, name: "Иван" }
         ],
         messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "How are you?" }
         ],
         newMessageText: ""
      },
      sidebar: {
         friends: [
            { id: 1, name: "Eduard", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/14657455_133430557126419_3890564097929120908_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=16S-DFSS4yIAX9QPK9x&_nc_ht=scontent.fiev12-1.fna&oh=980294e225f7171ea7902c987cc7cac6&oe=5FD180C4" },
            { id: 2, name: "Dasha", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/117719676_1200697036953865_1942958823265836547_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=9BoHf30vUmYAX-lPDyp&_nc_ht=scontent.fiev12-1.fna&oh=280ea4a9fae22df41a799808e684fa6c&oe=5FCFE926" },
            { id: 3, name: "Lena", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/59637848_658070961302606_3329770574154039296_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=jVgfqFl7enwAX-zEMqz&_nc_ht=scontent.fiev12-1.fna&oh=7637b8b9fed4f2ee5d1689db0eecf51d&oe=5FD1EADC" },
            { id: 4, name: "Dima", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t31.0-8/27023769_2052066251705498_8571303532211497264_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=qtJbZEajFZAAX-HNxeR&_nc_ht=scontent.fiev12-1.fna&oh=95d53e0542db1217242af274018f0d5b&oe=5FCFE833" }
         ]
      }
   },
   _reRenderTree() { },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._reRenderTree = observer;
   },
   
   dispatch(action) {
      this._state.profilePage = profilePageReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._reRenderTree(this._state);
      
   }
}

export default store;