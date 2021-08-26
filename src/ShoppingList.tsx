// @flow
import * as React from 'react';
import {Paper} from "@material-ui/core";
import { List } from '@material-ui/core';
import {ShoppingItem} from "./ShoppingItem";

type Props = {};

const items = [
    {id: 1, userImg: 'https://i.pravatar.cc/300', priority: 'N/A', description: 'Milk'},
    {
        id: 2,
        userImg: 'https://i.pravatar.cc/300',
        priority: 'HIGH',
        description: 'Eggs'
    }]
export const ShoppingList = (props: Props) => {
    return (

        <List>
            {items.map((item) => {
                return <ShoppingItem id={item.id} userImg={item.userImg} priority={item.priority} description={item.description}/>
            })}
        </List>
    );
};