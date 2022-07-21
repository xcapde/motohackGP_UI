import './style/style.css'
import { Home } from './pages/Home';
import { Navbar } from './components/navbar/Navbar'
import {Detail} from './pages/detail/Detail'
function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Detail/>
        <Home/>
        
    </div>
  );
}

export default App;
