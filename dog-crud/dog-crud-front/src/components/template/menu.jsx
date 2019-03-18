import React, {Component}from 'react';
import {Link} from  'react-router-dom';
import { ListItem, List, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Expandless from '@material-ui/icons/ExpandLess';
import Expandmore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

class MenuList extends Component {
    state = {
        open: false
    }

    handleClick = () => {
        this.setState({open:!this.state.open})
    }

    render() {
        const {open} = this.state

        return(
            <List component='nav'>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <StarIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary='Dogs'/>
                    {this.state.open? <Expandless/>:<Expandmore/>}
                </ListItem>
                <Collapse in={this.state.open} timeout='auto' unmountOnExit>
                    <List>
                        <Link to='/dogs'>
                            <ListItem>
                                <ListItemIcon>
                                    <ListIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary='List'/>
                            </ListItem>
                        </Link>
                        <Link to='/dogs/new'>
                            <ListItem>
                                <ListItemIcon>
                                    <AddIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary='Add'/>
                            </ListItem>
                        </Link>
                    </List>

                </Collapse>
            </List> 
        )
    }
}

export default MenuList;
