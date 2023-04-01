import "./App.css";
// import { Homelan } from "./Pages/Homelan";
// import { Mainroute } from "./landingcomponent/PagesMain/Mainroute";
// import ProductList from "./Pages/ProductList";
import { Mainroute } from "./landingcomponent/PagesMain/Mainroute";
import { Footer2 } from "./landingcomponent/Footer2";
import Navbar from "./landingcomponent/PagesMain/Navbar";
// import ProductList from "./Pages/ProductList";

function App() {
  return (
    <div className="App">
      {/* <WithSubnavigation /> */}
      <Navbar/>
      <Mainroute />
      <Footer2/>
    </div>
  );
}

export default App;
