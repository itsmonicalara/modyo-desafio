import './App.css';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Memory Game</h1>
      <h2>Hits: 0</h2>
      <h2>Errors: 0</h2>
      <Menu></Menu>
    </div>
  );
}

export default App;
