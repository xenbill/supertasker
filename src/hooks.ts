import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { ApplicationDispatch, ApplicationState } from './store';
import { useMemo } from 'react';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

//in order to use 
//this : 
//const tasks = useAppSelector(state => state.tasks.entities)
//instead of this :
//const tasks = useSelector((state:ApplicationState) => state.tasks.entities)


export const useAppDispatch: () => ApplicationDispatch = useDispatch;


//can also do this 
export const useTasks =()=>{
  const tasks = useAppSelector(state=>state.tasks.entities); 
  const loading = useAppSelector(state => state.tasks.loading);

  return useMemo(()=>[tasks,loading] as const , [tasks,loading])
}