const ADD_MESSAGE = 'ADD-MESSAGE';

let defaultDialogs = {
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
   ]
}


const dialogPageReducer = (state = defaultDialogs, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = action.newDialogBody;
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: newMessage }],
         };
      default:
         return state;
   }
}

export const addMessageActionCreator = (newDialogBody) => ({ type: ADD_MESSAGE, newDialogBody });

export default dialogPageReducer;