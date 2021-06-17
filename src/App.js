import logo from './logo.svg';
import './App.css';

function App() {

    function getUserChange() {
        fetch("http://localhost:3001/admin/users", {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    function getDealChange() {
        fetch("http://localhost:3001/deal/6098e4c9d86756027c41f7b0", {credentials: "include"})
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div className="App">
            <a href="/new-deal">Nouveau deal</a>
            -
            <a href="/deals">Les deals</a>
            -
            <button onClick={getDealChange}>
                DEAL
            </button>
            -
            <button onClick={getUserChange}>
                USERS
            </button>
            -
            <a href="/login">LOGIN</a>
            -
            <a href="/register">REGISTER</a>
            -
            <a href="/logout">
                LOGOUT
            </a>
            -



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/login"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
