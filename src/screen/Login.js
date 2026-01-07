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
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { loginApi } from "../auth/authApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { loginFun } = useContext(AuthContext);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    let temp = { username: "", password: "" };
    let isValid = true;

    if (!credentials.username.trim()) {
      temp.username = "Username is required";
      isValid = false;
    } else if (!isValidEmail(credentials.username)) {
      temp.username = "Enter a valid email address";
      isValid = false;
    }

    if (!credentials.password.trim()) {
      temp.password = "Password is required";
      isValid = false;
    } else if (credentials.password.length < 6) {
      temp.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(temp);
    return isValid;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const payload = {
        phone_number: "+917012429389",
        device_token: ["web-test-token"],
        device_id: "web-browser-001",
      };

      const response = await loginApi(payload);
      const token = response.data?.access_token;

      if (!token) {
        setErrors({ ...errors, password: "Invalid login response" });
        return;
      }

      loginFun(token);
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container minHeight="100vh">
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
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          width: "35%",
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
        ></Box>
      </Grid>
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
            fullWidth
            margin="normal"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            error={Boolean(errors.username)}
            helperText={errors.username}
          />

          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
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
            sx={{ mt: 4, py: 1.5 }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
