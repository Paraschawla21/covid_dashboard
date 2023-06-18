import React, { useState } from "react";
import { Button, Tab, Tabs, Toolbar } from "@mui/material";
const Navbar = () => {
    const [value, setValue] = useState();

    return (
        <Toolbar style={{ padding: "5px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "5px",
                    marginBottom: "5px",
                }}
            >
                <img src="images/icon.png" alt="" height={60} width={55} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "auto",
                        marginBottom: "0",
                    }}
                >
                    <h2 style={{ marginTop: "0", marginBottom: "0" }}>
                        finangel
                    </h2>
                    partners
                </div>
            </div>
            <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="primary"
                value={value}
                onChange={(e, value) => setValue(value)}
            >
                <Tab label="Dashboard" />
                <Tab label="Covid Records" />
                <Tab label="Footer" />
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
                Logout
            </Button>
        </Toolbar>
    );
};

export default Navbar;
