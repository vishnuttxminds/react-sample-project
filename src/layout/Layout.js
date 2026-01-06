import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ mt: 8, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
