import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
        If you have any questions, suggestions, or feedback, we're here to listen. Feel free to get in touch with us through our contact form, and we'll get back to you as soon as possible. Your thoughts are important to us, and we're committed to providing the best possible service.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell>
          <a href="tel:+9854982558" style={{ textDecoration: "none", color: "inherit" }}>
            <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> +9854982558 (Toll Free)
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <a href="mailto:yhimanshuyadav606@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
            <MailIcon sx={{ color: "skyblue", pt: 1 }} /> yhimanshuyadav606@gmail.com
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <a href="tel:+9779808677798" style={{ textDecoration: "none", color: "inherit" }}>
            <CallIcon sx={{ color: "green", pt: 1 }} /> +977 9808677798
          </a>
        </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
