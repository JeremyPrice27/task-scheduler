function TaskList() {
    const tasksData = [
        { id: 1, description: 'Learn React hooks', dueDate: '2025-02-15', completed: true },
        { id: 2, description: 'Build a task table component', dueDate: '2025-03-01', completed: false },
        { id: 3, description: 'Style the table with CSS', dueDate: '2025-03-10', completed: false },
    ];
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
            {tasksData.map((task) => (
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
