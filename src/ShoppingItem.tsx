// @flow
import * as React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

type Props = {
    id: number,
    userImg: string,
    priority: string,
    description: string
};

export function ShoppingItem(props: Props) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar
                    alt='User avatar'
                    src={props.userImg}
                />
            </ListItemAvatar>
            <ListItemText primary={props.description} />
        </ListItem>
    );
};