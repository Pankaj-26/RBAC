import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import BlogList from "./pages/BlogList";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<BlogList />} />
        

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRole={"admin"}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
