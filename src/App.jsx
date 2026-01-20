import { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [addTask, setAddTask] = useState(false);
  const onAddTask = function(e) {
    e.preventDefault();
    setAddTask(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Team Planning <span>🗓️</span></h1>
        <p>Schedule tasks to be completed.</p>
      </header>
      <main className="main-section">
        {!addTask &&
          <>
            <TaskList />
            <div className="task-row">
              <button className="task-button"
              onClick={(e) => onAddTask(e)}>Add Item</button>
            </div>
          </>
        }
        {addTask &&
          <TaskForm setAddTask={setAddTask}/>
        }
      </main>
    </div>
  );
}

export default App;
