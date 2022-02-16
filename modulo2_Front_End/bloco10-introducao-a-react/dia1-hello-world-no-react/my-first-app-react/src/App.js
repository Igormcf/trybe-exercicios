import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    
    <li>{value}</li>
  );
}

const ToDoList = ['Go to the gym', 'Go to certbio', 'Attend class at Trybe', 'Wash the dishes', 'Clean the stove', 'Sweep the house']

function App() {
  return (
    <div>
      <h1>To-do list</h1>
      <ol>{ToDoList.map((item) => Task(item))}</ol>
    </div>
  );
}

export default App;
