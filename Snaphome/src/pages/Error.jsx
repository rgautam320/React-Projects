import React from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import "./Error.css";

const Error = () => {
    return (
        <Box className="error">
            <Typography>The page you're looking for isn't available.</Typography>

            <Link className="error-to-home" to="/">
                Go to Home
            </Link>
        </Box>
    );
};

export default Error;
