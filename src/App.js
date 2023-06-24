import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
