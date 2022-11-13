import './app.css'
import CheckList from "./components/CheckList";
import Timer2 from "./components/Timer2";
import { AlertButtom } from "./components/AlertButton";

function App() {
  return (
    <div className="App">
      <h1 > Check List</h1>
      <CheckList />
      <Timer2 />
      <AlertButtom name={'David'}/>
    </div>

  );
}

export default App;
