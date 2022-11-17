import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Container, Grid, TextField, Typography } from "@mui/material";

import HomeCard from "../components/HomeCard";

import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { saveQuery } from "../redux/filterReducer";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { query } = useSelector((state) => state.filter);

    const onSubmit = (e) => {
        dispatch(saveQuery({ ...query, search: e.target.value }));
        if (e.key === "Enter") {
            navigate("/buy");
        }
    };

    const options = [
        {
            image: "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp",
            alt: "Buy a Home",
            title: "Buy a Home",
            desc: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
            link: "/buy",
            linkText: "Brouse Homes",
        },
        {
            image: "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp",
            alt: "Sell a Home",
            title: "Sell a Home",
            desc: "No matter what path you take to sell your home, we can always help you to navigate to a successful sale.",
            link: "/sale",
            linkText: "Sell Here",
        },
        {
            image: "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp",
            alt: "Rent a Home",
            title: "Rent a Home",
            desc: "Discover a place that checks all of your boxes. Filter your rental search, and find exactly what you’re looking for.",
            link: "/rent",
            linkText: "Find Rentals",
        },
    ];
    return (
        <>
            <Box className="banner" />
            <Container maxWidth="xl" className="home-container">
                <Typography className="home-heading">Find it, Tour it, Own it</Typography>
                <Box className="input-box">
                    <TextField
                        fullWidth
                        variant="outlined"
                        onChange={(e) => onSubmit(e)}
                        onKeyDown={(e) => onSubmit(e)}
                        label="Enter an Address, ZIP Code"
                    />
                </Box>
            </Container>
            <Container>
                <Grid container my={5} spacing={3}>
                    {options.map((val) => (
                        <Grid item sm={12} md={4}>
                            <HomeCard
                                key={val.title}
                                image={val.image}
                                alt={val.alt}
                                title={val.title}
                                desc={val.desc}
                                link={val.link}
                                linkText={val.linkText}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Home;
