import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Team Planning <span>🗓️</span></h1>
        <p>Schedule tasks to be completed by a specific date.</p>
      </header>
      <main className="main-section">
        <TaskList />
      </main>
    </div>
  );
}

export default App;
