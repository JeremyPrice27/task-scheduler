import { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';

function App() {
  const [addTask, setAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const onAddTask = function(e) {
    e.preventDefault();
    setAddTask(true);
    setCurrentTask(null);
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
            <TaskList setAddTask={setAddTask} setCurrentTask={setCurrentTask}/>
            <div className="task-row">
              <button className="task-button"
              onClick={(e) => onAddTask(e)}>Add Item</button>
            </div>
          </>
        }
        {addTask &&
          <TaskForm setAddTask={setAddTask} currentTask={currentTask} setCurrentTask={setCurrentTask}/>
        }
      </main>
    </div>
  );
}

export default App;
