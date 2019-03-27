import React, { Component } from 'react';
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { bindActionCreators } from 'redux';
import {search} from '../../../reducers/dog/action-creator'
import {connect} from 'react-redux';

class List extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.search();
        console.log(this.state)
    }
    render() {
        let list = this.props.list
        console.log(this.props)
        return (
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
                                list.map(dog => (
                                    <TableRow>
                                        <TableCell>
                                            {dog.name ? dog.name : " - "}
                                        </TableCell>
                                        <TableCell>
                                            {dog.race ? dog.race : " - "}
                                        </TableCell>
                                        <TableCell>
                                            {dog.age ? dog.age : " - "}
                                        </TableCell>
                                        <TableCell>
                                            {dog.color ? dog.color : " - "}
                                        </TableCell>
                                        <TableCell>
                                            {dog.size ? dog.size : " - "}
                                        </TableCell>
                                        <TableCell>
                                            <Button>
                                                <EditIcon />
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button>
                                                <DeleteIcon />
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
    }
}
const mapStateToProps = state => ({list:state.dog.list})
const mapDispatchToProps = dispatch => bindActionCreators({search},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(List)