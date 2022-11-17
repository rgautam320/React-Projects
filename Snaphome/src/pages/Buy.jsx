import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Pagination } from "@mui/material";

import "./Buy.css";

import { data } from "../data/data";

import PropertyCard from "../components/PropertyCard";
import MarketLayout from "../container/MarketLayout";

const Buy = () => {
    const { query, pagination } = useSelector((state) => state.filter);

    const [page, setPage] = useState(1);
    const [datas, setDatas] = useState([]);
    const [allData, setAllData] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        let x = [];
        let price = [];
        if (query.price) {
            price.push(query.price.split("-")[0]);
            price.push(query.price.split("-")[1]);
        }
        x = data?.filter((val) => {
            return (
                (val.streetAddress.toLowerCase().indexOf(query.search?.toLowerCase()) > -1 ||
                    val.zipcode.indexOf(query.search) > -1) &
                (val.homeStatus !== "FOR_RENT") &
                (val.city.toLowerCase().indexOf(query.location?.toLowerCase()) > -1 ||
                    query.location === "All Location" ||
                    query.location === undefined) &
                (val.homeType === query.property ||
                    query.property === "" ||
                    query.property === null ||
                    query.property === "All Properties") &
                ((val.price >= price[0] && val.price <= price[1]) || query.price === undefined || price.length === 0) &
                (val.openHouseStartDate <= query.move ||
                    query.move === "Invalid date" ||
                    query.move === null ||
                    query.move === undefined)
            );
        });

        setAllData(x);
        let y = x.slice((page - 1) * pagination, page * pagination);
        setDatas(y);

        if (x.length <= (page - 1) * pagination) {
            setPage(1);
        }
    }, [query, page, pagination]);

    return (
        <MarketLayout heading="Search Properties and Buy">
            <Box>
                <Grid container spacing={4}>
                    {datas.map((val) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <PropertyCard key={val.id} data={val} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "center", mt: 3 }}>
                    {allData.length >= pagination && (
                        <Pagination
                            count={Math.floor(allData.length / pagination)}
                            showFirstButton
                            showLastButton
                            page={page}
                            onChange={handleChange}
                        />
                    )}
                </Box>
            </Box>
        </MarketLayout>
    );
};

export default Buy;
