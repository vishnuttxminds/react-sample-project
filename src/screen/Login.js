import React, { useContext, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { loginFun } = useContext(AuthContext);

  const handleLogin = () => {
    loginFun();
    navigate("/home");
  };

  return (
    <Grid container minHeight="100vh">
      {/* LEFT IMAGE SECTION */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517649763962-0c623066013b')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 4,
            color: "#fff",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            A SOCIAL
            <br />
            PREDICTION APP
          </Typography>
          <Typography variant="body2" mt={1}>
            where you can create questions and predictions based on live
            matches.
          </Typography>
        </Box>
      </Grid>

      {/* RIGHT LOGIN FORM */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="100%" maxWidth={420} px={3}>
          <Typography variant="body2" color="text.secondary">
            Login to the Admin Panel
          </Typography>

          <Typography variant="h3" color="primary" fontWeight="bold" mb={3}>
            Welcome
          </Typography>

          <TextField
            label="Username"
            required
            fullWidth
            margin="normal"
            defaultValue="admin@xminds.com"
          />

          <TextField
            label="Password"
            required
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            size="large"
            variant="contained"
            sx={{
              mt: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: "16px",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
