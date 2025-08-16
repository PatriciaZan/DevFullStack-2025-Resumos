// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";
// import NavBar from "./components/NavBar";
// import ProtectedRouter from "./components/PrivateRoute";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <>
//       <Router>
//         <NavBar />

//         <Routes>
//           <Route path="/" element={<Home />}>
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRouter>
//                   <Dashboard></Dashboard>
//                 </ProtectedRouter>
//               }
//             />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import React from "react";

export default function App() {
  const { user, logout } = useAuth();
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <>
              <span>Olá, ${user.username}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>
    </div>
  );
}
