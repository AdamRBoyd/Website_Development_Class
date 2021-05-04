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

    HomeHandler(event){
        this.setState({show: "home"});
    }

    ActivitiesHandler(event){
        this.setState({show: "activities"});
    }

    membershipHandler(event){
        this.setState({show: "membership"});
    }

    adminActivityHandler(event){
        this.setState({show: "adminActivity"});
    }

    addActivityHandler(a){
        this.setState({events: this.state.events.concat(a) })
        this.setState({show: "adminActivity"})
    };

    addActivityNonClubHandler(a){
        this.setState({nonclub: this.state.nonclub.concat(a) })
        this.setState({show: "adminActivity"})
    };

    render() {
        let content = null;
        // statements/logic to set the content variable based on state
        switch(this.state.show){
            case "home":
                content = <Home role={this.state.role} />;
                break;
            case "activities":
                content = 
                <Activities 
                events={this.state.events} 
                nonclub={this.state.nonclub} 
                role={this.state.role} 
                />; 
                break;
            case "membership":
                content = <Membership role={this.state.role} />;
                break;
            case "adminActivity":
                content = 
                <AdminActivity 
                events={this.state.events} 
                nonclub={this.state.nonclub} 
                role={this.state.role} 
                addE={this.addActivityHandler.bind(this)} 
                addNCE={this.addActivityNonClubHandler.bind(this)} 
                />; 
                break;
            default:
                content = <h2>Warning something went wrong!!!</h2>;
        };


        return (
            <>
                <Menu role={this.state.role} 
                home={this.HomeHandler.bind(this)} 
                activities={this.ActivitiesHandler.bind(this)} 
                adminActivity={this.adminActivityHandler.bind(this)} 
                membership={this.membershipHandler.bind(this)}/>
                {content}
            </>
        );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));