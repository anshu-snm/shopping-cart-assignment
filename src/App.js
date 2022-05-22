import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center ">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/productlist" element={<ProductList />}></Route>
          </Routes>
        </div>

        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <div className="flex flex-col items-center justify-center ">
        <ProductList />
      </div> */}
      </div>
    </Router>
  );
}

export default App;
