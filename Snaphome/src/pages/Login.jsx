import React from "react";

import { Box, Typography } from "@mui/material";

import "./Login.css";

const Login = () => {
    return (
        <Box className="sell">
            <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ pb: 4 }}>
                Login to get many benifits
            </Typography>
            <Typography variant="body1" fontWeight="bold" textAlign="center" color="text.secondary">
                We will make it simpler for you to sell, rent or buy your home.
            </Typography>
        </Box>
    );
};

export default Login;
