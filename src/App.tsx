import React from 'react';
import './App.css';
import {MainView} from "./MainView";
import Container from "@material-ui/core/Container";
import 'semantic-ui-css/semantic.min.css'
import { makeStyles } from '@material-ui/core/styles';

function App() {

    return (
        <div className="app">
            <div className="app-body">
                <Container children={<MainView/>}/>
            </div>
        </div>
    );
}

export default App;
