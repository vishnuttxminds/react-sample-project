import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { logOutApi } from "../auth/authApi";
import { useContext, useState } from "react";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [loading, setLoading] = useState(false);
  const { logoutFun } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);

      const response = await logOutApi({
        id: "3e5e26dd-e1cb-4c02-8f0e-9944e36c7c64",
        device_token: "",
      });

      console.log("Logout response:", response.data);

      logoutFun();
      
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppBar position="fixed" sx={{ background: "#111827", ml: "240px" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User List
        </Typography>

        <IconButton color="inherit" onClick={handleLogout}>
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
