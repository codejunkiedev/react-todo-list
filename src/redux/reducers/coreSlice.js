import { createSlice } from '@reduxjs/toolkit';

export const coreSlice = createSlice({
  name: 'core',
  initialState: {
    ToDo: {
      ID: -1,
      Title: '',
      Text: '',
      IsDeleted: false,
      CreatedDate: null
    },
    ToDoList: [
      {
        ID: 1,
        Title: 'Task #1',
        Text: 'OnItemChecked should add strike through line on the text so the task will be marked as done',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false,
      },
      {
        ID: 2,
        Title: 'Task #2',
        Text: 'Move css styles from elements into seperate css file (Bonus: JSX)',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
      {
        ID: 3,
        Title: 'Task #3',
        Text: 'Add Validation to the Item Creation Form for empty text/title',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
      {
        ID: 4,
        Title: 'Task #4',
        Text: 'Remove the IsDeleted & CreatedDate fields then Generate it in the script before add item to the list',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
      {
        ID: 5,
        Title: 'Task #5',
        Text: 'Removed Item should be presented in Archive List section',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
      {
        ID: 6,
        Title: 'Task #6',
        Text: 'On select item from Archive List, return back the item to the To Do List ',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
      {
        ID: 7,
        Title: 'Task #7',
        Text: 'Order lists by Created Date (Bonus)',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
      {
        ID: 8,
        Title: 'Task #8',
        Text: 'Add item to the list on form submit',
        IsDeleted: false,
        CreatedDate: null,
        IsCompleted: false
      },
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.ToDoList.push(action.payload);
    },
    toggleTodo: (state, action) => {
    const index = state.ToDoList.findIndex((todo) => todo.ID === action.payload.ID);
    state.ToDoList[index].IsCompleted = action.payload.IsCompleted;
    // state.ToDoList[index].IsCompleted = !state.ToDoList[index].IsCompleted;
    },
    setToDoList: (state, action) => {
      state.ToDoList = [...state.ToDoList, action.payload];
    }
  }
});

export const { setToDoList, addTodo, toggleTodo } = coreSlice.actions
export const selectToDoList = state => state.core.ToDoList;
export default coreSlice.reducer