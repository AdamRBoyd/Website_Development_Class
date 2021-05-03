import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import events from "./eventData.json";
import Membership from "./membership";

//let contents = <> <Menu /> <Membership /></ > ;

//ReactDOM.render(contents, document.getElementById("root"));

class App extends React.Component {
    constructor(props) {
        super(props);
        //"guest", "user", and "admin"
        this.state = { role: "guest", show: "home" }; 
    }


    render() {
        let content = null;
        // statements/logic to set the content variable based on state
        switch(this.state.show){
            case "home":
                content = <Home role={this.state.role}/>;
                break;
            case "activities":
                content = <Activities events={events} role={this.state.role}/>; 
                break;
            case "membership":
                content = <Membership role={this.state.role}/>;
                break;
            default:
                content = <h2>Warning something went wrong!!!</h2>;
        };

        return (
            <>
                <Menu role={this.state.role}/>
                {content}
            </>
        );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));