import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../styles/tabledata.css";

const TableData = ({ curRows }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    // hook made for state management during searching
    const [search, setSearch] = useState("");

    console.log(curRows);

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleDateString("en-GB");
    };

    const columns = [
        { id: "country", label: "COUNTRY", minWidth: 120 },
        {
            id: "city",
            label: "CITY",
            minWidth: 170,
            align: "right",
        },
        {
            id: "confirmed",
            label: "CONFIRMED",
            minWidth: 150,
            align: "right",
        },
        {
            id: "deaths",
            label: "DEATHS",
            minWidth: 150,
            align: "right",
        },
        {
            id: "province",
            label: "PROVINCE",
            minWidth: 170,
            align: "right",
        },
        {
            id: "lastUpdate",
            label: "LAST UPDATE",
            minWidth: 190,
            align: "right",
            format: (value) => formatTime(value),
        },
    ];

    const rows = curRows.filter((item) => {
        if (search === "") {
            return item;
        } else if (
            item.country.toLowerCase().startsWith(search.toLowerCase())
        ) {
            return item;
        }
    });
    console.log(rows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <div style={{ marginBottom: "100px" }}>
                <div className="parentContainer">
                    <input
                        id="searchBar"
                        className="search"
                        type="text"
                        placeholder="Search Country..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
                <Paper
                    sx={{ width: "100%", overflow: "hidden" }}
                    style={{
                        maxWidth: "1268px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            id="headings"
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}
                                            >
                                                {columns.map((column) => {
                                                    const value =
                                                        row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {value != null
                                                                ? column.format
                                                                    ? column.format(
                                                                          value
                                                                      )
                                                                    : value
                                                                : "NULL"}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </>
    );
};

export default TableData;
