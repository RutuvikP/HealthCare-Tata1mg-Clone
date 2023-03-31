import "./App.css";
// import { Homelan } from "./Pages/Homelan";
// import { Mainroute } from "./landingcomponent/PagesMain/Mainroute";
import WithSubnavigation from "./landingcomponent/PagesMain/Navbar";
// import ProductList from "./Pages/ProductList";
import { Mainroute } from "./landingcomponent/PagesMain/Mainroute";
import { Footer2 } from "./landingcomponent/Footer2";
// import ProductList from "./Pages/ProductList";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <Mainroute />
      <Footer2/>
    </div>
  );
}

export default App;
