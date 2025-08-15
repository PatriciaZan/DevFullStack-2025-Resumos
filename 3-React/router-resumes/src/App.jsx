import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Sobre from "./pages/Sobre";
import NotFount from "./pages/NotFount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="sobre" element={<Home />} />
            <Route path="posts/:id" element={<Sobre />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
