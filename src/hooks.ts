import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { ApplicationDispatch, ApplicationState } from './store';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

//in order to use 
//this : 
//const tasks = useAppSelector(state => state.tasks.entities)
//instead of this :
//const tasks = useSelector((state:ApplicationState) => state.tasks.entities)


export const useAppDispatch: () => ApplicationDispatch = useDispatch;