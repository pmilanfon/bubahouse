import React from 'react';
import './App.css';
import {MainView} from "./MainView";
import Container from "@material-ui/core/Container";

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
