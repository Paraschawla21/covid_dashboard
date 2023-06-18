import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement
);

const Dashboard = () => {
    const [data, setData] = useState({
        labels: ["Australia", "Canada", "India", "New Zealand", "Pakistan"],
        datasets: [
            {
                label: "Confirmed Covid Cases Country Wise",
                data: [232974, 629269, 2007605, 232974, 7031, 44343],
                backgroundColor: "white",
                borderColor: "blue",
                tension: 0.4,
            },
        ],
    });

    return (
        <div style={{ background: "#f1f4ff" }}>
            <div
                style={{
                    marginLeft: "4.60em",
                    paddingTop: "20px",
                    color: "#323479",
                }}
            >
                <h1 style={{ fontSize: "2.5rem" }}>Dashboard</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "50px",
                }}
            >
                <div style={{ display: "flex", padding: "0 25px 0" }}>
                    <div style={{ marginRight: "20px" }}>
                        <h1>2007605</h1>
                        <span>Confirmed Covid Cases in India</span>
                        <h1>629269</h1>
                        <span>Confirmed Covid Cases in Canada</span>
                        <h1>44343</h1>
                        <span>Confirmed Covid Cases in Pakistan</span>
                    </div>
                    <div>
                        <h1>232974</h1>
                        <span>Confirmed Covid Cases in Australia</span>
                        <h1>7031</h1>
                        <span>Confirmed Covid Cases in New Zealand</span>
                    </div>
                </div>
                <div style={{ width: "675px", height: "375px" }}>
                    <Line data={data}></Line>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
