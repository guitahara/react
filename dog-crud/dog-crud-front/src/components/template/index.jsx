import React, { Component } from 'react';
import MenuList from './menu';
import Routes from '../../routes/routes';
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Drawer, 
    Divider, 
    ListItem, 
    CssBaseline, 
    Grid,
    List,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Header from './header';
import AppDrawer from './appDrawer';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240

const styles = theme => ({
    root: {
      display: 'flex',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });

class Template extends Component {

    state = {
        open: false
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    

    render() {
        const { classes, children,theme} = this.props
        const {open} = this.state

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header
                    open={open} 
                    handleDrawerOpen={this.handleDrawerOpen} 
                    handleDrawerClose={this.handleDrawerClose} 
                />
                <AppDrawer handleDrawerClose={this.handleDrawerClose} open={open}/>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    {children}
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Template);
