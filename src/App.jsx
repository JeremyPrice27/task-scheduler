import { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';

function App() {
  const [addTask, setAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const scrollTop = function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  const onAddTask = function(e) {
    e.preventDefault();
    setAddTask(true);
    setCurrentTask(null);
    scrollTop();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Task Scheduling <span>🗓️</span></h1>
        <p>Schedule tasks to be completed.</p>
      </header>
      <main className="main-section">
        <div className="task-description">
            <p>A Task Scheduling application built by Jeremy Price to
                demonstrate skills in React, Redux ToolKit and React Hook Form.</p>
            <p>See the <a target="_blank"
            href="https://github.com/JeremyPrice27/task-scheduler">Repository</a> to
            view the code.</p></div>
        {!addTask &&
          <>
            <TaskList scrollTop={scrollTop} setAddTask={setAddTask} setCurrentTask={setCurrentTask}/>
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
