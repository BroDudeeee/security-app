import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/login";
import Username from "./pages/username/Username";

import Reset from "./pages/reset/Reset";
import Recovery from "./pages/recovery/Recovery";
import Password from "./pages/password/Password";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Username />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/password" element={<Password />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
