import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage/Home";
import Register from "./pages/JoinPage/Register";
import Navbar from "./pages/Homepage/Navbar";
import Footer from "./pages/Homepage/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage shows full layout */}
        <Route path="/" element={<Home />} />

        {/* Register page shows Navbar + Register + Footer */}
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
