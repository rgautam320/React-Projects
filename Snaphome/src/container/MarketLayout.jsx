import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { Autocomplete, Box, Container, Grid, TextField, Typography } from "@mui/material";

import { data } from "../data/data";
import { saveQuery } from "../redux/filterReducer";

import "./MarketLayout.css";

const MarketLayout = ({ children, heading }) => {
    const dispatch = useDispatch();
    const { query: prevQuery } = useSelector((state) => state.filter);

    let prices = [
        { label: "All Price", value: null },
        { label: "$500 - $2,500", value: "500-2500" },
        { label: "$2,500 - $5,000", value: "2500-5000" },
        { label: "$5,000 - $10,000", value: "5000-10000" },
        { label: "All Price", value: null },
        { label: "$10,000 - $100,000", value: "10000-100000" },
        { label: "$100,000 - $1,000,000", value: "100000-1000000" },
        { label: "$1,000,000 - $10,000,000", value: "1000000-10000000" },
    ];

    const [propertyType, setPropertyType] = useState([]);
    const [city, setCity] = useState([]);

    const [query, setQuery] = useState({
        search: prevQuery.search || "",
        location: "",
        move: null,
        price: "",
        property: "",
    });

    const getDropdowns = useCallback(() => {
        let properties = ["All Properties"];
        let cities = ["All Location"];

        data.forEach((val) => {
            properties.push(val.homeType);
            cities.push(`${val.city}, ${val.state}`);
        });
        setPropertyType(properties.filter((val, ind, self) => ind === self.indexOf(val)));
        setCity(cities.filter((val, ind, self) => ind === self.indexOf(val)));
    }, []);

    const handleChange = (newValue) => {
        const val = newValue?.format("YYYY-MM-DDTHH:mm:ss");
        setQuery({ ...query, move: val });
    };

    useEffect(() => {
        getDropdowns();
    }, [getDropdowns]);

    useEffect(() => {
        dispatch(saveQuery(query));
    }, [dispatch, query]);

    return (
        <Container sx={{ my: 5 }}>
            <Box className="upper-heading">
                <Box className="page-heading">
                    <Typography variant="h4" fontWeight="bold">
                        {heading}
                    </Typography>
                </Box>
                <Box className="search-box">
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={query.search}
                        onChange={(e) => setQuery({ ...query, search: e.target.value })}
                        label="Enter an Address, ZIP Code"
                    />
                </Box>
            </Box>
            <Box sx={{ my: 5 }}>
                <Grid container spacing={2} className="filter-grid">
                    <Grid item xs={12} md={6} lg={3} className="search-box-mobile">
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={query.search}
                            onChange={(e) => setQuery({ ...query, search: e.target.value })}
                            label="Enter an Address, ZIP Code"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Autocomplete
                            className="search-autocomplete"
                            componentName="search"
                            onChange={(e, value) => setQuery({ ...query, location: value?.split(",")[0] })}
                            fullWidth
                            disablePortal
                            defaultValue={query.location ? query.location : null}
                            options={city}
                            renderInput={(params) => <TextField variant="outlined" {...params} label="Location" />}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DesktopDatePicker
                            className="date-picker"
                            label="Move in Date"
                            inputFormat="MM/DD/YYYY"
                            minDate={new Date()}
                            value={query.move}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Autocomplete
                            className="search-autocomplete"
                            onChange={(e, value) => setQuery({ ...query, price: value?.value })}
                            fullWidth
                            disablePortal
                            options={window.location.pathname === "/rent" ? prices.slice(0, 4) : prices.slice(4, 8)}
                            renderInput={(params) => <TextField {...params} label="Price" />}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Autocomplete
                            className="search-autocomplete"
                            onChange={(e, value) => setQuery({ ...query, property: value })}
                            fullWidth
                            disablePortal
                            options={propertyType}
                            renderInput={(params) => <TextField {...params} label="Property Type" />}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>{children}</Box>
        </Container>
    );
};

export default MarketLayout;
