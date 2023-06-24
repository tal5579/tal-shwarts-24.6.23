import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";
import {Provider} from "react-redux";
import {makeStore} from "./redux/store";

function App() {
    const store = makeStore();
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/favorites" element={<Favorites />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
