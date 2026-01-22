import { useDispatch, useSelector } from "react-redux";
import { completeTask, removeTask, reopenTask, selectTaskList } from "./taskList";
function TaskList({setAddTask, setCurrentTask}) {
    const dispatch = useDispatch();
    const taskListData = useSelector(selectTaskList);
    const onCompleteTask = function(id) {
        dispatch(completeTask(id));
    };
    const onReopen = function(id) {
        dispatch(reopenTask(id));
    };
    const onRemoveTask = function(id) {
        dispatch(removeTask(id));
    };
    const onEdit = function(id) {
        setAddTask(true);
        const task = taskListData.find(task => task.id === id);
        setCurrentTask(task);
    };
    return (
        <>
        {taskListData.length == 0 && 
            <p>There are no available tasks at this time.</p>
        }
        {taskListData.length > 0 && 
        <div className="task-list">
            <table className="task-table">
            <thead>
                <tr>
                <th>Description</th>
                <th>Due Date</th>
                <th>Completed</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {taskListData.map((task) => (
                <tr key={task.id}>
                    <td data-label="Description">{task.description}
                        <button
                        className="action-button small"
                        type="button"
                        aria-label="Edit item" onClick={() => onEdit(task.id)}>Edit ✏️</button></td>
                    <td data-label="Due Date">{task.dueDate}</td>
                    <td data-label="Completed">
                        {task.completed &&
                        <span className="completed">Yes</span>
                        }
                        {!task.completed &&
                        <span>No</span>
                        }
                    </td>
                    <td data-label="Action">
                        {!task.completed &&
                        <button className="action-button complete" onClick={() => onCompleteTask(task.id)}>Complete</button>
                        }
                        {task.completed &&
                        <button className="action-button reopen" onClick={() => onReopen(task.id)}>Reopen</button>
                        }
                        <button className="action-button" onClick={() => onRemoveTask(task.id)}>Remove</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        }
        </>
    );
}

export default TaskList;
