import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectTaskList, setTaskListItem } from "./taskList";

function TaskForm({setAddTask}) {
    const dispatch = useDispatch();
    const taskListData = useSelector(selectTaskList);
    const {
        handleSubmit,
        register,
    } = useForm({
        mode: 'onChange',
    });
    const onCancel = function() {
        setAddTask(false);
    };
    const onSubmit = function(data) {
        const id = taskListData.length;
        dispatch(setTaskListItem({...data, id})).then(() => {
            setAddTask(false);
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <label htmlFor="description">Task Description:</label>
            <textarea
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
                <button className="task-button" type="submit">Add Task</button>
                <button className="task-button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default TaskForm;
