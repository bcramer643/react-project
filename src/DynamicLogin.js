import React from 'react';
import Valid from './ValidUser';
import Invalid from './InvalidUser';
import Welcome from './WelcomeUser';

const components = {

    home : Valid,
    invalidUser : Invalid,
    welcome: Welcome

}

function DynamicLogin(props) {
    const SelectUser = components[props.User];

    return(
        <SelectUser />
    )

};

export default DynamicLogin;