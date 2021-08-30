// @flow
import * as React from 'react';
import {
    Box,
    createStyles,
    Fab,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    Theme,
    Tooltip,
    Typography
} from "@material-ui/core";
import {List} from '@material-ui/core';
import {ShoppingItem} from "./ShoppingItem";
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from "@material-ui/core/SvgIcon/SvgIcon";

type Props = {};

const items = [
    {id: 1, userImg: 'https://i.pravatar.cc/300', priority: 'N/A', description: 'Milk'},
    {
        id: 2,
        userImg: 'https://i.pravatar.cc/300',
        priority: 'HIGH',
        description: 'Eggs'
    }];
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(2),
        },
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3),
        },
    }),
);
export const ShoppingList = (props: Props) => {
    const classes = useStyles();

    return (
        <>
            <Grid justify="center">
                <Typography variant="h4" align={"center"}>
                    Shopping
                </Typography>

                <List>
                    {items.map((item) => {
                        return (
                            <ShoppingItem id={item.id} userImg={item.userImg} priority={item.priority}
                                          description={item.description}/>)
                    })}
                </List>
                <Tooltip title="Add" aria-label="add">
                    <Fab color="primary" className={classes.absolute}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </Grid>
        </>
    );
};