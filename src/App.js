import './App.css';
import 'bulma/css/bulma.css'
import Search from './components/Search'


function App() {
  return (
    <div>
      
      <section className="App-center">
      <p>Hacker News Search</p>
      <Search/>
      </section>
      <footer>Hacker News Search by joncode1</footer> 
    </div>
  );
}

export default App;
