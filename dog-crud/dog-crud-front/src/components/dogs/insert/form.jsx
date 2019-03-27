import React from 'react';
import {Grid,TextField, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Field,reduxForm} from 'redux-form';

const renderTextField = ({name,placeholder,value,type}) => (
    <TextField  name={name} 
                fullWidth
                placeholder={placeholder} 
                value={value}
                type={type}>
    </TextField>
)

let DogForm = props => {
    const {handleSubmit} = props
    return (
        <form style={{ margin: 20 }} onSubmit={handleSubmit}>
            <Grid container md={12} spacing={24} >
                <Grid item md={12}>
                    <Field component={renderTextField} name='Name' placeholder='Name' type='text'/>
                </Grid>
                <Grid item md={12}>
                    <Field component={renderTextField} name='Race' placeholder='Race' type='text'/>
                </Grid>
                <Grid item md={12}>
                    <Field component={renderTextField} name='Age' placeholder='Age' type='number'/>
                </Grid>
                <Grid item md={12}>
                    <Field component={renderTextField} name='Color' placeholder='Color' type='text'/>
                </Grid>
                <Grid item md={12}>
                    <Field component={renderTextField} name='Size' placeholder='Size' type='text'/>
                </Grid>
            </Grid>
            <Fab className={this.props.classes.fab} color='secondary' aria-label='Add' type='submit'>
                <AddIcon />
            </Fab>
        </form>
    )
}

export default reduxForm({
    form:'dogForm'
})(DogForm)
