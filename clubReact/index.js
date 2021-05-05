import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import events from "./eventData.json";
import Membership from "./membership";
import AdminActivity from "./AdminActivity"

//let contents = <> <Menu /> <Membership /></ > ;

//ReactDOM.render(contents, document.getElementById("root"));

class App extends React.Component {
    constructor(props) {
        super(props);
        //"guest", "user", and "admin"
        this.state = { role: "admin", show: "home", events: [], nonclub: [] }; 
        
        this.state.events = events.events;
        this.state.nonclub = events.nonClubEvents;
    }

    menuClick(item){
        if(item === "logout"){
            this.setState({role: "guest", show: "home"});
        }
        else {
            this.setState({show: item});
        }
    }

    addActivity(a, list){
        console.log("add");
        if(list==="club"){
            this.setState({events: this.state.events.concat(a) });
            this.setState({show: "adminActivity"});
            console.log("club");
        }
        else {
            this.setState({nonclub: this.state.nonclub.concat(a) });
            this.setState({show: "adminActivity"});
            console.log("nonclub");
        }
    }

render() {
        let content = null;
        // statements/logic to set the content variable based on state
        switch(this.state.show){
            case "home":
                content = <Home />;
                break;
            case "activities":
                content = <Activities events={this.state.events} nonclub={this.state.nonclub} />; 
                break;
            case "membership":
                content = <Membership />;
                break;
            case "adminActivity":
                content = 
                <AdminActivity 
                events={this.state.events} 
                nonclub={this.state.nonclub} 
                addAct={this.addActivity.bind(this)} 
                />; 
                break;
            default:
                content = <h2>Warning something went wrong!!!</h2>;
        };


        return (
            <>
                <Menu role={this.state.role} clicked={this.menuClick.bind(this)} shown={this.state.show} />
                {content}
            </>
        );
    }
}

// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));