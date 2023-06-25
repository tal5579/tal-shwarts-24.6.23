import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";
import {Provider} from "react-redux";
import {makeStore} from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
      </Provider>
  );
}

export default App;
