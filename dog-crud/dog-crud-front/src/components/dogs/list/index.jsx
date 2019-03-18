import React from 'react';
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const rows = [
    {
        name: "Mayla",
        race: "Fox-Paulistinha",
        age: 2,
        color: "White/Brown",
        size: "Medium"
    },
    {
        name: "Bob",
        race: "Husky",
        age: 18,
        color: "White/Grey",
        size: "Big"
    }
]
const List = () => (
    <div>
        <Typography variant='title' color='inherit'>
            List
        </Typography>
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Race</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map( dog => (
                            <TableRow>
                                <TableCell>
                                    {dog.name?dog.name: " - "}
                                </TableCell>
                                <TableCell>
                                    {dog.race?dog.race: " - "}
                                </TableCell>
                                <TableCell>
                                    {dog.age?dog.age: " - "}
                                </TableCell>
                                <TableCell>
                                    {dog.color?dog.color: " - "}
                                </TableCell>
                                <TableCell>
                                    {dog.size?dog.size: " - "}
                                </TableCell>
                                <TableCell>
                                    <Button>
                                        <EditIcon/>
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button>
                                        <DeleteIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Paper>
    </div>
)

export default List