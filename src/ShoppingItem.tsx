// @flow
import * as React from 'react';
import {
    Avatar, Button, createStyles, Divider, Fab,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, makeStyles,
    Paper, Theme, Tooltip
} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

type Props = {
    id: number,
    userImg: string,
    priority: string,
    description: string
};

const useStyles  = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(5)
        },
        absolute: {
            position: "absolute",
            top: theme.spacing(1),
            right: theme.spacing(1)
        },
        divider: {
            height: 28,
            margin: 4,
        },
        listItem: {
            display: "flex",
            marginTop: "20px"
        },
    })
);

export function ShoppingItem(props: Props) {
    const classes = useStyles();

    return (
        <Paper elevation={3}>
        <ListItem className={classes.listItem}>
           {/* <Tooltip title="Add" aria-label="add">
                <Fab color="secondary" className={classes.absolute}>
                    <AddCircleOutlineIcon fontSize={"large"}/>
                </Fab>
            </Tooltip>*/}
            <ListItemAvatar>
                <Avatar
                    alt='User avatar'
                    src={props.userImg}
                />
            </ListItemAvatar>
            <ListItemText primary={props.description} />
            <ListItemSecondaryAction>
                {/*<Divider className={classes.divider} orientation="vertical" />*/}
                <IconButton edge="end" aria-label="comments" onClick={() => alert("IZBRISAO")}>
                    <EditOutlinedIcon color={"action"}/>
                </IconButton>
                {/*<Divider className={classes.divider} orientation="vertical" />*/}
                <IconButton edge="end" aria-label="comments" onClick={() => alert("PROMENIO")}>
                    <DeleteOutlineRoundedIcon color={"secondary"}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper>
    );
};