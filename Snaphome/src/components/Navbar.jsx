import * as React from "react";
import { Link } from "react-router-dom";

import { AppBar, Box, Container, SwipeableDrawer, Typography } from "@mui/material";

import { Menu } from "@mui/icons-material";

import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (val) => {
        setOpen(val);
    };

    return (
        <AppBar position="static" className="navbar">
            <Container maxWidth="xl" className="container">
                <Box className="nav-item-box">
                    <Link to="buy" className="nav-item">
                        Buy
                    </Link>
                    <Link to="rent" className="nav-item">
                        Rent
                    </Link>
                    <Link to="sell" className="nav-item">
                        Sell
                    </Link>
                </Box>
                <Box>
                    <Link to="/">
                        <Typography variant="h5" fontWeight="bold" color="blue" className="logo">
                            Snaphome
                        </Typography>
                    </Link>
                </Box>
                <Box className="nav-item-box">
                    <Link to="login" className="nav-item">
                        Login
                    </Link>
                </Box>
                <Box className="mobile-menu">
                    <Menu className="hamburger-menu" onClick={() => toggleDrawer(true)} />
                </Box>
            </Container>

            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <Box className="mobile-drawer">
                    <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ pb: 4 }}>
                        Menu
                    </Typography>
                    <Link to="buy" className="nav-item">
                        Buy
                    </Link>
                    <Link to="rent" className="nav-item">
                        Rent
                    </Link>
                    <Link to="sell" className="nav-item">
                        Sell
                    </Link>
                    <Link to="login" className="nav-item">
                        Login
                    </Link>
                </Box>
            </SwipeableDrawer>
        </AppBar>
    );
};

export default Navbar;
