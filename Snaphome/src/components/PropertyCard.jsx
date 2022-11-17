import { Box, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ data }) => {
    return (
        <Paper className="property-card" elevation={3}>
            <CardMedia component="img" image={data.imgSrc} alt={data.statusText} />
            <CardContent sx={{ py: 1 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    textAlign="left"
                    fontWeight="bold"
                    color="#0027a8"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    {data.priceInText}
                    {data.homeStatus === "FOR_RENT" ? (
                        <Typography variant="h6" color="text.secondary">
                            &nbsp; / month
                        </Typography>
                    ) : (
                        ""
                    )}
                </Typography>
                <Box sx={{ display: "flex" }}>
                    {data.bedrooms !== 0 && (
                        <Typography variant="body2" color="text.secondary">
                            {data.bedrooms} bds &nbsp;
                        </Typography>
                    )}

                    {data.bathrooms !== 0 && (
                        <Typography variant="body2" color="text.secondary">
                            <span className="span-line">|</span> {data.bathrooms} ba &nbsp;
                        </Typography>
                    )}

                    {data.area && (
                        <Typography variant="body2" color="text.secondary">
                            <span className="span-line">|</span> {data.area} sqft &nbsp;
                        </Typography>
                    )}
                    <Typography>&nbsp;</Typography>

                    {data.homeStatus !== "FOR_RENT" && (
                        <Typography variant="body2" color="primary" fontWeight="bold">
                            {data.statusText}
                        </Typography>
                    )}
                </Box>
                {data.homeStatus === "FOR_RENT" && (
                    <Typography variant="h6" color="text.primary">
                        {data.statusText.substring(0, 28)}
                    </Typography>
                )}
                <Box sx={{ my: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        {data.streetAddress}, {data.city}, {data.state}
                    </Typography>
                </Box>
            </CardContent>
        </Paper>
    );
};

export default PropertyCard;
