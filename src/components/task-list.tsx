import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './task';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { useAppSelector, useTasks } from '../hooks';
import Loading from './loading';

const TaskList = () => {
 // const { tasks } = useContext(ApplicationContext);

  //use the custom hook instead
  //const tasks = useSelector((state:ApplicationState) => state.tasks.entities)

//const tasks = useAppSelector(state => state.tasks.entities)

const [tasks,loading] = useTasks()


  return (
    <section className="task-list">
      <Loading loading={loading}/>
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
