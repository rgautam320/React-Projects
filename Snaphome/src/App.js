import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Error from "./pages/Error";
import Buy from "./pages/Buy";

import Navbar from "./components/Navbar";

import "./App.css";

import theme from "./utils/Theme";
import Rent from "./pages/Rent";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/buy" element={<Buy />} />
                        <Route path="/sell" element={<Sell />} />
                        <Route path="/rent" element={<Rent />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
