import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setTaskListItem } from "./taskList";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function TaskForm({setAddTask, currentTask, setCurrentTask}) {
    const dispatch = useDispatch();
    const schema = yupResolver(
        object().shape({
            description: string().required("Description is required")
                .matches(/^[A-Za-z0-9,\-\s]*$/, "Description contains invalid characters")
                .min(4, "Description must be at least 4 characters long")
                .max(60, "Description must be less than 60 characters long"),
            dueDate: string().required("Due Date is required")
        })
    );
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        values: currentTask ? {
            description: currentTask.description,
            dueDate: currentTask.dueDate,
        } : {},
        resolver: schema,
        mode: 'onChange',
    });
    const onCancel = function(e) {
        e.preventDefault();
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
                minLength={4}
                maxLength={60}
                aria-describedby="descriptionError"
                required
                {...register('description')}
            />
            <p className="error-container">{errors.description && <span id="descriptionError"
            className="error-message">{errors.description.message}</span>}</p>
            </div>
            <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
                id="dueDate"
                type="date"
                format="MM/DD/YYYY"
                aria-describedby="dueDateError"
                min={!currentTask ? new Date().toISOString().split("T")[0] : null}
                max={new Date(new Date().setFullYear(new Date().getFullYear() + 5))
                    .toISOString().split("T")[0]}
                required
                {...register('dueDate')}
            />
            <p className="error-container">{errors.dueDate && <span id="dueDateError"
            className="error-message">{errors.dueDate.message}</span>}</p>
            </div>
            <div className="task-row">
                {currentTask && <button className="task-button" type="submit">Update Task</button>}
                {!currentTask && <button className="task-button" type="submit">Add Task</button>}
                <button className="task-button" onClick={(e) => onCancel(e)}>Cancel</button>
            </div>
        </form>
    );
}

export default TaskForm;
