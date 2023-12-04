import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
