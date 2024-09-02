import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import User from "./components/User";

import Post from "./components/Post";

// Ana uygulama bileşeni
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
