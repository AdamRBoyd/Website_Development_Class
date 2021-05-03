import React from 'react';

function Menu(props) {
    let content = null;
    switch(props.role){
        case "admin":
            content = 
                <ul>
                    <li>Home</li>
                    <li>Club Activities</li>
                    <li>Activities Management</li>
                    <li>Members</li>
                    <li>Log Out</li>
                </ul>
            break;
        case "user":
            content = 
                <ul>
                    <li>Home</li>
                    <li>Club Activities</li>
                    <li>Log Out</li>
                </ul>
            break;
        default:
            content = 
                <ul>
                    <li>Home</li>
                    <li>Club Activities</li>
                    <li>Member Login</li>
                    <li>Sign Up</li>
                </ul>
    };

    return <nav>{content}</nav>;
}

export default Menu;