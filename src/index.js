import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
        <Route component={NotFound} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));