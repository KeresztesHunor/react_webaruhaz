import './App.css';
import { termekek } from './adat';
import Termekek from './komponensek/Termekek';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <article>
        <Termekek termekek={termekek} />
      </article>
      <footer>XD</footer>
    </div>
  );
}

export default App;
