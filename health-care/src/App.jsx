import "./App.css";
// import { Homelan } from "./Pages/Homelan";
// import { Mainroute } from "./landingcomponent/PagesMain/Mainroute";
import WithSubnavigation from "./landingcomponent/PagesMain/Navbar";
// import ProductList from "./Pages/ProductList";
import { Mainroute } from "./landingcomponent/PagesMain/Mainroute";
// import ProductList from "./Pages/ProductList";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
     <Mainroute/>
    </div>
  );
}

export default App;
