import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TableData from "./components/TableData";

const App = () => {
    const [stats, setStats] = useState([]);

    const options = {
        method: "GET",
        url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        // params: { country: { setSearch } },
        headers: {
            "X-RapidAPI-Key":
                "bbd5c48c90mshe7ce7d806ed4be6p19345bjsn3ec0c6c1c521",
            "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
    };

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                const myData = response.data.data.covid19Stats;
                setStats(myData);
                console.log(myData);
            })
            .catch(function (error) {
                console.error(error);
            });
    });

    const curRows = stats;
    console.log(curRows);
    return (
        <>
            <Navbar />
            <Dashboard />
            <div
                style={{
                    color: "#323479",
                    marginLeft: "4.60em",
                    marginBottom: "50px",
                }}
            >
                <h1 style={{ fontSize: "2.5rem" }}>Covid Records</h1>
            </div>
            <TableData curRows={curRows} /> <hr />
            <Footer />
        </>
    );
};

export default App;
