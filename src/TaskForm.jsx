import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { selectTaskList, setTaskListItem } from "./taskList";

function TaskForm({setAddTask, currentTask, setCurrentTask}) {
    const dispatch = useDispatch();
    const taskListData = useSelector(selectTaskList);
    const {
        handleSubmit,
        register,
    } = useForm({
        values: currentTask ? {
            description: currentTask.description,
            dueDate: currentTask.dueDate,
        } : {},
        mode: 'onChange',
    });
    const onCancel = function() {
        setAddTask(false);
        setCurrentTask(null);
    };
    const onSubmit = function(data) {
        if (currentTask) {
            data.id = currentTask.id;
        }
        dispatch(setTaskListItem(data)).then(() => {
            setAddTask(false);
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <label htmlFor="description">Task Description:</label>
            <input
                type="text"
                id="description"
                rows={4}
                cols={30}
                required
                {...register('description')}
            />
            </div>
            <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
                id="dueDate"
                type="date"
                required
                {...register('dueDate')}
            />
            </div>
            <div className="task-row">
                {currentTask && <button className="task-button" type="submit">Update Task</button>}
                {!currentTask && <button className="task-button" type="submit">Add Task</button>}
                <button className="task-button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default TaskForm;
