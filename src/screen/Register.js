import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";

const Register = () => {
  const [form, setForm] = useState({
    productCategory: "",
    productName: "",
    productType: "",
  });

  const [errors, setErrors] = useState({
    productCategory: "",
    productName: "",
    productType: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let temp = {
      productCategory: "",
      productName: "",
      productType: "",
    };

    let isValid = true;

    if (!form.productCategory.trim()) {
      temp.productCategory = "Product category is required";
      isValid = false;
    }

    if (!form.productName.trim()) {
      temp.productName = "Product name is required";
      isValid = false;
    } else if (form.productName.length < 3) {
      temp.productName = "Product name must be at least 3 characters";
      isValid = false;
    }

    if (!form.productType.trim()) {
      temp.productType = "Product type is required";
      isValid = false;
    }
    console.log("Error temp :", temp);
    setErrors(temp);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setProducts([...products, form]);

    setForm({
      productCategory: "",
      productName: "",
      productType: "",
    });

    setErrors({
      productCategory: "",
      productName: "",
      productType: "",
    });
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {/* FORM */}
      <Grid item xs={12} md={6}>
        <Box p={4}>
          <Typography variant="h5" mb={3}>
            Add Product
          </Typography>

          <TextField
            label="Product Category"
            name="productCategory"
            fullWidth
            margin="normal"
            value={form.productCategory}
            onChange={handleChange}
            error={Boolean(errors.productCategory)}
            helperText={errors.productCategory}
          />

          <TextField
            label="Product Name"
            name="productName"
            fullWidth
            margin="normal"
            value={form.productName}
            onChange={handleChange}
            error={Boolean(errors.productName)}
            helperText={errors.productName}
          />

          <TextField
            label="Product Type"
            name="productType"
            fullWidth
            margin="normal"
            value={form.productType}
            onChange={handleChange}
            error={Boolean(errors.productType)}
            helperText={errors.productType}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Grid>

      {/* LIST */}
      <Grid item xs={12} md={6}>
        <Box p={4}>
          <Typography variant="h6" mb={2}>
            Product List
          </Typography>

          {products.length === 0 && (
            <Typography color="text.secondary">
              No products added yet
            </Typography>
          )}

          {products.map((item, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography>
                <strong>Category:</strong> {item.productCategory}
              </Typography>
              <Typography>
                <strong>Name:</strong> {item.productName}
              </Typography>
              <Typography>
                <strong>Type:</strong> {item.productType}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
