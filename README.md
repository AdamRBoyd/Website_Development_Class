# Homework #12 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

### (b)

![Screenshot for Q1b pt a](/images/HW121ba.JPG)

![Screenshot for Q1b pt b](/images/HW121bb.JPG)

![Screenshot for Q1b pt c](/images/HW121bc.JPG)

```javascript
class App extends React.Component {
    constructor(props) {
        super(props);
        //"guest", "user", and "admin"
        this.state = { role: "user", show: "home" }; 
    }


    render() {
        let content = null;
        // statements/logic to set the content variable based on state
        switch(this.state.show){
            case "home":
                content = <Home user={this.state.user}/>;
                break;
            case "activities":
                content = <Activities events={events} user={this.state.user}/>; 
                break;
            case "membership":
                content = <Membership user={this.state.user}/>;
                break;
            default:
                content = <h2>Warning something went wrong!!!</h2>;
        }

        return (
            <>
                <Menu/>
                {content}
            </>
        );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));
```

## Question 2

### (a)

**"guest":** Home, Club Activities, Member Login, Sign Up

**"user":** Home, Club Activities, Log Out

**"admin":** Home, Club Activities, Activity Management, Memebers, Log Out

### (b)

![Screenshot for Q2b pt a](/images/HW122ba.JPG)

![Screenshot for Q2b pt b](/images/HW122bb.JPG)

## Question 3

### (a)

I added handlers for each of the possible pages/states that when called utilized the "setState" to set the state to the desired option. I then passed in a bound copy of each event handler that was bound to "this" into the menu.

```javascript
return (
            <>
                <Menu role={this.state.role} home={this.HomeHandler.bind(this)} activities={this.ActivitiesHandler.bind(this)} membership={this.membershipHandler.bind(this)}/>
                {content}
            </>
        );
```

### (b)

I added and "onClick" event to each menu item that called the props.optionname which returned to the main and called the event handler.

```javascript
content = 
    <ul>
        <li onClick={props.home}>Home</li>
        <li onClick={props.activities}>Club Activities</li>
        <li>Member Login</li>
        <li onClick={props.membership}>Sign Up</li>
    </ul>
```

## Question 4

### (a)

