import { useDispatch, useSelector } from "react-redux";
import { completeTask, removeTask, selectTaskList } from "./taskList";
function TaskList() {
    const dispatch = useDispatch();
    const taskListData = useSelector(selectTaskList);
    const onCompleteTask = function(id) {
        dispatch(completeTask(id));
    };
    const onRemoveTask = function(id) {
        dispatch(removeTask(id));
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
                    <td>{task.description}</td>
                    <td>{task.dueDate}</td>
                    <td>
                        {task.completed &&
                        <span className="completed">Yes</span>
                        }
                        {!task.completed &&
                        <span>No</span>
                        }
                    </td>
                    <td>
                        {task.completed &&
                        <button className="action-button" onClick={() => onRemoveTask(task.id)}>Remove</button>
                        }
                        {!task.completed &&
                        <button className="action-button complete" onClick={() => onCompleteTask(task.id)}>Complete</button>
                        }
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
