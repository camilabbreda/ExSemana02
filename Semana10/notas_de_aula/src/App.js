// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { TipProvider } from "./Contexts/app-context"
function App() {
  return (
    <div>
      <TipProvider>
        <Home />
      </TipProvider>
    </div>
  );
}

export default App;
