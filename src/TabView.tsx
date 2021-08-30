import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {ShoppingList} from "./ShoppingList";
import {Paper} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import MovieIcon from '@material-ui/icons/Movie';
import ChildCareIcon from '@material-ui/icons/ChildCare';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function TabView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant={"fullWidth"}
                    >
                        <Tab icon={<ShoppingBasket />} aria-label="shopping" />
                        <Tab icon={<ListAltIcon />} aria-label="todo" />
                        <Tab icon={<MovieIcon />} aria-label="movies" />
                        <Tab icon={<ChildCareIcon />} aria-label="child-care" />
                    </Tabs>
                </Paper>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ShoppingList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h1>NOT IMPLEMENTED YET!</h1>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </div>
    );
}
