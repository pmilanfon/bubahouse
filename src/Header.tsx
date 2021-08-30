// @flow
import * as React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import BugReportIcon from '@material-ui/icons/BugReportOutlined';
import HouseIcon from '@material-ui/icons/House';
import "./Header.css"
import {Avatar} from "@material-ui/core";

type Props = {

};
export const Header = (props: Props) => {
    return (
        <div className="header">
            <span><h1>Buba</h1>
            <Avatar>
                <HouseIcon color="primary"/>
            </Avatar>
            </span>
            <span><BugReportIcon fontSize={"large"}/></span>
            {/*<BugReportIcon/>*/}
            <ShoppingCartIcon></ShoppingCartIcon>
        </div>
    );
};