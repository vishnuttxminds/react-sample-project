import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#0f172a",
          color: "#fff",
        },
      }}
    >
      <Box p={2}>
        <Typography variant="h6" fontWeight="bold">
          COD
        </Typography>
        <Typography variant="caption">Creative Prediction</Typography>
      </Box>

      <List>
        <ListItem
          button
          component={NavLink}
          to="/home"
          sx={{
            "&.active": {
              backgroundColor: "#22cabcff",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User" />
        </ListItem>

        <ListItem
          button
          component={NavLink}
          to="/sports"
          sx={{
            "&.active": {
              backgroundColor: "#22cabcff",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
      </List>
    </Drawer>
  );
}
