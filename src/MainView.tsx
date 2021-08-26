import * as React from 'react';
import './MainView.css';
import Container from "@material-ui/core/Container";
import {ShoppingList} from "./ShoppingList";
import {Header} from "./Header";

type Props = {};

{/*<Paper elevation={3}/>*/
}

export const MainView = (props: Props) => {
    return (
        <>
            <Header/>
            <ShoppingList/>
        </>
    )
};