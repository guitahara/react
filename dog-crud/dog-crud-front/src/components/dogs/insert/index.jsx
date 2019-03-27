import React, { Component } from 'react';
import { Typography, Paper, FormGroup, Grid, Input, FormControl, InputLabel, TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import {addDog, updateDogInfo} from '../../../reducers/dog/action-creator';
import {connect} from 'react-redux';

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
});

class Insert extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const{classes,theme} = this.props

        return (
            <div>
                <Grid container>
                    <Grid item md={12}>
                        <Typography variant='title' color='inherit'>
                            New
                        </Typography>
                    </Grid>
                    <Grid item md={12} alignContent='flex-end'>
                        <Paper>
                            <form style={{ margin: 20 }}>
                                <Grid container md={12} spacing={24} >
                                    <Grid item md={12}>
                                        <TextField name='Name' fullWidth placeholder='Name'></TextField>
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField name='Race' fullWidth placeholder='Race'></TextField>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Input name='Age' type='number' fullWidth placeholder='Age'></Input>
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField name='Color' fullWidth placeholder='Color'></TextField>
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField name='Size' fullWidth placeholder='Size'></TextField>
                                    </Grid>
                                </Grid>
                                <Fab className={classes.fab} color='secondary' aria-label='Add'>
                                    <AddIcon />
                                </Fab>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({addDog,updateDogInfo},dispatch)
const mapStateToProps = state => ({dog:state.dog.dog})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles, { withTheme: true })(Insert))