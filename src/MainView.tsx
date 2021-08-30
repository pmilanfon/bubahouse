import * as React from 'react';
import './MainView.css';
import Container from "@material-ui/core/Container";
import {ShoppingList} from "./ShoppingList";
import {Header} from "./Header";
import {makeStyles, Paper, Tab, Tabs} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import TabView from "./TabView";
/*import FavoriteIcon from '@material-ui/icons/FavoriteIcon';
import PersonPinIcon from '@material-ui/icons/PersonPinIcon';*/

type Props = {};

{/*<Paper elevation={3}/>*/
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
});


export const MainView = (props: Props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            {/*<div className="ui pointing menu">
                <a className="item">
                    Home
                </a>
                <a className="item">
                    Messages
                </a>
                <a className="item active">
                    Friends
                </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <input type="text" placeholder="Search..."/>
                                <i className="search link icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui segment">
                <p></p>
            </div>*/}
            <TabView></TabView>
        </>
    )
};

