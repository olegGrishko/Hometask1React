import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import './components/Message.css';

function App() {
  return (
    <div className="App">
      <Message mes="Привет всем!" />
      <Message mes="Как дела?" />
    </div>
  );
}

export default App;
