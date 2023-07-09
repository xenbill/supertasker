import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/tasks-slice';
import { usersReducer } from './features/users-slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});

//shape of my state to use it in useSelector
export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;

//go to index.tsx after => wrap the components with provider store