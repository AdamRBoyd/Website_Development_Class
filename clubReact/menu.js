import React from 'react';

function Menu(props) {
    function isActive(name){
        if(name===props.shown){
            return "active";
        }
        else {
            return "";
        }
    }
    let content = null;
    switch(props.role){
        case "admin":
            content = 
                <ul>
                    <li key="home"><a className={isActive("home")} onClick={props.clicked.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.clicked.bind(null, "activities")}>Club Activities</a></li>
                    <li key="adminActivity"><a className={isActive("adminActivity")} onClick={props.clicked.bind(null, "adminActivity")}>Activities Management</a></li>
                    <li>Members</li>
                    <li key="logout"><a onClick={props.clicked.bind(null, "logout")}>Log Out</a></li>
                </ul>
            break;
        case "user":
            content = 
                <ul>
                    <li key="home"><a className={isActive("home")} onClick={props.clicked.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.clicked.bind(null, "activities")}>Club Activities</a></li>
                    <li key="logout"><a onClick={props.clicked.bind(null, "logout")}>Log Out</a></li>
                </ul>
            break;
        default:
            content = 
                <ul>
                    <li key="home"><a className={isActive("home")} onClick={props.clicked.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.clicked.bind(null, "activities")}>Club Activities</a></li>
                    <li>Member Login</li>
                    <li key="membership"><a className={isActive("membership")} onClick={props.clicked.bind(null, "membership")}>Sign Up</a></li>
                </ul>
    };

    return <nav>{content}</nav>;
}

export default Menu;