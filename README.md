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

I added an event handler that when called utilized the "setState" to set the state to the desired given option. I then passed in a bound copy of each event handler that was bound to "this" into the menu.

```javascript
return (
            <>
                <Menu role={this.state.role} clicked={this.menuClick.bind(this)} shown={this.state.show} />
                {content}
            </>
        );
```

### (b)

I added and "onClick" event to each menu item that called the props.clicked which I rebound with an added variable which returned to the main and called the proper event handler based on the passed variable.

```javascript
content = 
    <ul>
                    <li key="home"><a className={isActive("home")} onClick={props.clicked.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.clicked.bind(null, "activities")}>Club Activities</a></li>
                    <li key="adminActivity"><a className={isActive("adminActivity")} onClick={props.clicked.bind(null, "adminActivity")}>Activities Management</a></li>
                    <li>Members</li>
                    <li key="logout"><a onClick={props.clicked.bind(null, "logout")}>Log Out</a></li>
                </ul>
```

## Question 4

### (a)

![Screenshot for Q4a](/images/HW124a.JPG)

### (b)

### (c)

![Screenshot for Q4c](/images/HW124c.JPG)

### (d)

```javascript
class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { events: [], nonClub: []};
    }

```

### (e)

```javascript
return <React.Fragment>
            <header>
                <h1>Activity Management</h1>
            </header>
            <main>
                <section className="gridContainer bordered2">
                    <details>
                        <summary>Add Activity:</summary>
                        <form onSubmit={this.handleSubmit}>
                            <label></label>
                            <label>Title: </label>
                            <input type="text" name="title" minLength="1" maxLength="50" required />
                            
                            <label>Location: </label>
                            <input type="text" name="location" minLength="1" maxLength="50" required />

                            <label>Date: </label>
                            <input type="date" name="dateTime" minLength="1" maxLength="50" required />

                            <label>Activity List: </label>
                            <select name="which">
                                <option value="future">Future Events</option>
                                <option value="nonClub">Non-Club Events</option>
                            </select>
                            
                            <button type="submit">Add</button>
                        </form>
                    </details>
                </section>

```

### (f)

AdminActivity.js:
```javascript
handleSubmit = (event) => {
        event.preventDefault();

        let newEvent = {
            title: event.target.title.value,
            location: event.target.location.value,
            dateTime: event.target.dateTime.value
        };
        console.log(newEvent);
        if(event.target.which.value == "future") {
            this.props.addAct(newEvent, "club");
        }
        else {
            this.props.addAct(newEvent, "nonClub");
        }
    }
```

index.js:
```javascript
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
```
