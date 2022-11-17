import React from "react";

import { Box, Typography } from "@mui/material";

import "./Sell.css";

const Sell = () => {
    return (
        <Box className="sell">
            <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ pb: 4 }}>
                Sell your home with confidence
            </Typography>
            <Typography variant="body1" fontWeight="bold" textAlign="center" color="text.secondary">
                Making it simpler to sell your home and move forward.
            </Typography>
        </Box>
    );
};

export default Sell;
