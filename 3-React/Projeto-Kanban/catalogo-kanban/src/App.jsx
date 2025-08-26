import { Outlet } from "react-router-dom";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalogo from "./pages/Catalogo.jsx";
import Kanban from "./pages/Kanban.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/kanban" element={<Kanban />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
