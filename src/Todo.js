import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo__list">
            
            <ListItem>

                <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                </ListItemAvatar>

                <ListItemText primary={props.text} secondary={Date.now()} />

            </ListItem>
        </List>
    )
}

export default Todo
