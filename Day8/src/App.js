import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Contact from "./components/pages/Contact";
import Aboutus from "./components/pages/Aboutus";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Faq from "./components/pages/Faq";
import Structure from "./components/pages/Structure";
import { Provider } from "react-redux";
import store from './redux/store'
import Feedback from "./components/pages/Feedback";
import Guide from "./components/pages/Guide";
import Dashboard from "./components/pages/Dashboard";
import Plant from "./components/pages/Plant";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<Aboutus />}></Route>
            <Route path="/guide" element={<Guide />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/sturcture" element={<Structure />}></Route>
            <Route path="/feedback" element={<Feedback/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/plant" element={<Plant/>}></Route>
            
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
