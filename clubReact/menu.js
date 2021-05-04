import React from 'react';

function Menu(props) {
    let content = null;
    switch(props.role){
        case "admin":
            content = 
                <ul>
                    <li onClick={props.home}>Home</li>
                    <li onClick={props.activities}>Club Activities</li>
                    <li onClick={props.adminActivity}>Activities Management</li>
                    <li>Members</li>
                    <li>Log Out</li>
                </ul>
            break;
        case "user":
            content = 
                <ul>
                    <li onClick={props.home}>Home</li>
                    <li onClick={props.activities}>Club Activities</li>
                    <li>Log Out</li>
                </ul>
            break;
        default:
            content = 
                <ul>
                    <li onClick={props.home}>Home</li>
                    <li onClick={props.activities}>Club Activities</li>
                    <li>Member Login</li>
                    <li onClick={props.membership}>Sign Up</li>
                </ul>
    };

    return <nav>{content}</nav>;
}

export default Menu;