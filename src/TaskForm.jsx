function TaskForm({setAddTask}) {
    const onCancel = function() {
        setAddTask(false);
    };
    const handleSubmit = function() {
      //submit form
    };
    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', margin: '20px' }}>
            <div className="form-group">
            <label htmlFor="description">Task Description:</label>
            <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                cols={30}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
                id="dueDate"
                type="date"
                onChange={(e) => setDueDate(e.target.value)}
                required
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
