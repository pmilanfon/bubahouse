// @flow
import * as React from 'react';
import {makeStyles} from "@material-ui/core";

type Props = {

};
export const BubaStyles = (props: Props) => {
    function iconStyles() {
        return {
            editIcon: {
                color: '#F57F17',
            }
        }
    }

    const buttonClasses = makeStyles(iconStyles)();
};


