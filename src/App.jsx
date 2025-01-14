import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Media from "./pages/Media";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
      </Routes>

    </Router>
  );
}

export default App;
