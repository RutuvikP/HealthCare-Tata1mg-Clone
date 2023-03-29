import './App.css';
import { Homelan } from './landingcomponent/PagesMain/Homelan';
import { Mainroute } from './landingcomponent/PagesMain/Mainroute';
import WithSubnavigation from './landingcomponent/PagesMain/Navbar';

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
     
      <Mainroute/>
    </div>
  );
}

export default App;
