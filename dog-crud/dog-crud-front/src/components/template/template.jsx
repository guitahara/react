import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Template extends Component {
    state = {
        open:false
    }

    handleOpen = () => {
        this.setState({open:true})
    }

    handleClose = () => {
        this.setState({open:false})
    }

    render() {
        const {open} = this.state

        return(
            <div>
                <AppBar position='fixed'>
                    <Toolbar disableGutters={!open}>
                        <IconButton color='inherit' onClick={this.handleOpen}>
                            <MenuIcon ></MenuIcon>
                        </IconButton>
                        <Typography variant='h6' color='inherit'>
                            Dog API
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer>
                    
                </Drawer>
            </div>
        )
    }
}

export default Template