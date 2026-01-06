import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import UserList from "./screen/UserList";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<UserList />} />
          <Route path="/sports" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
