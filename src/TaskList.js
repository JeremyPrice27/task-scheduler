import { useSelector } from "react-redux";
import { selectTaskList } from "./taskList";
function TaskList() {
    const taskListData = useSelector(selectTaskList);
    return (
        <div className="task-list">
            <table className="task-table">
            <thead>
                <tr>
                <th>Description</th>
                <th>Due Date</th>
                <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {taskListData.map((task) => (
                <tr key={task.id}>
                    <td>{task.description}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.completed ? 'Yes' : 'No'}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default TaskList;
