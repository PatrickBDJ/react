import logo from './logo.svg';
import './App.css';
import StateExample from './StateExample';
import Name from './Name';

function App() {

  const names = ['Anne', 'Julian', 'Sebastian'];
  
  return (
    <div className="App">
      <main>
        { names.map(myName => (
         <Name name={myName} /> 
        ))}
        </main>
    </div>
  );
}

export default App;
