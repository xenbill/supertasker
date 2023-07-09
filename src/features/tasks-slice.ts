import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import data from '../api/data.json';
import { removeUser } from './users-slice';


export type TasksState = {
  entities: Task[];
};

//type DraftTask = Partial<Task> // makes all the properties optional (becaouse i don't have id in the ui when creating)
//type DraftTask = Pick<Task, 'title'>;
type DraftTask = RequireOnly<Task, 'title'>;// check in global.d.ts

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TasksState = {
    //entities: data.tasks,
    entities: [],
  };

//async calling API
export const fetchTasks = createAsyncThunk('tasks/fetch',async ():Promise<Task[]> =>{
  const response =await fetch('/api/tasks').then(response =>response.json());
  return response.tasks; 
})

//after => add it to extra reducers
//now can fire it whereever you want => check index.txx

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask: (state, action: PayloadAction<DraftTask>) => {
        const task = createTask(action.payload);
        state.entities.unshift(task); //pushes in the beginning
        // state.entities.push(action.payload);// pushes in the end
      },
      removeTask: (state, action: PayloadAction<Task['id']>) => {
        const index = state.entities.findIndex(
          (task) => task.id === action.payload,
        );
        state.entities.splice(index, 1);
      },
    },
    // Extra reducers are additional reducers that can be added to the root 
    // reducer created by Redux Toolkit's configureStore(). They are typically
    //  used to handle actions that need to modify state across multiple slices
    //   or actions that are not specific to any particular slice.
    //--------------------------------------------------------------
    //every slice recieves all the actions (for all the slices) so can 
    //grub any action and do stuff
    extraReducers:(builder)=>{
      builder.addCase(removeUser,(state , action)=>{ // so when you remove a user do also this
        const userId =action.payload;
        for(const task of state.entities){
          if(task.user === userId){
            task.user = undefined // unlink task of user
          }
        }
      })


      builder.addCase(fetchTasks.fulfilled,(state , action)=>{
        state.entities=action.payload
      })
    }
  });


  export const tasksReducer = tasksSlice.reducer;

  export const {addTask,removeTask} = tasksSlice.actions;

  export default tasksSlice;