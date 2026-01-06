import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
import HomeScreen from "./screen/HomeScreen";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
