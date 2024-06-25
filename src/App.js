import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

export const App = () => {
  return (
    <div className="App">
      <Child1/>
      <Child2/>
      <Child3/>
    </div>
  );
}

export default App;
