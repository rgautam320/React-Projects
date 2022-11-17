import React from "react";
import { Link } from "react-router-dom";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import "./HomeCard.css";

const HomeCard = ({ image, alt, title, desc, link, linkText }) => {
    return (
        <Box className="home-card">
            <Card sx={{ pt: 5 }}>
                <CardMedia component="img" image={image} alt={alt} />
                <CardContent sx={{ py: 3 }}>
                    <Typography gutterBottom variant="h5" textAlign="center" fontWeight="bold" sx={{ py: 3 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ lineHeight: "28px" }}>
                        {desc}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 3, mt: 5 }}>
                        <Link className="home-link" to={link}>
                            {linkText}
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HomeCard;
