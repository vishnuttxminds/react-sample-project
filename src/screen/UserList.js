import {
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../auth/authApi";

export default function UserList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts(1, 10);

      console.log(
        "Products response:",
        JSON.stringify(response.data.response.result)
      );

      setProducts(response.data?.response?.result || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((products, index) => (
            <TableRow key={products.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{products.product_title}</TableCell>
              <TableCell>{products.shop_name}</TableCell>
              <TableCell>{products.description}</TableCell>
              <TableCell>
                <Chip label="Active" color="success" size="small" />
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
