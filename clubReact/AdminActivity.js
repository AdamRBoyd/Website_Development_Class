import React from 'react';

class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { events: [], nonClub: []};
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let newEvent = {
            title: event.target.title.value,
            location: event.target.location.value,
            dateTime: event.target.dateTime.value
        };
        console.log(newEvent);
        if(event.target.which.value == "future") {
            this.props.addE(newEvent);
        }
        else {
            this.props.addNCE(newEvent);
        }
        
    }

    render() {
        this.state.events = this.props.events.map(function (e){
            return <tr key={e.title}>
                <td><button type="submit" value="Delete">Delete</button></td>
                <td>{e.title}</td>
                <td>{e.location}</td>
                <td>{e.dateTime}</td>
                </tr>;
        });
    
        this.state.nonClub = this.props.nonclub.map(function (e){
            return <tr key={e.title}>
                <td><button type="submit" value="Delete">Delete</button></td>
                <td>{e.title}</td>
                <td>{e.location}</td>
                <td>{e.dateTime}</td>
                </tr>;
        });
    
        return <React.Fragment>
            <header>
                <h1>Activity Management</h1>
            </header>
            <main>
                <h2>Add Activity:</h2>

                <section className="gridContainer bordered2">
                    <form onSubmit={this.handleSubmit}>
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
                </section>

                <h2>Future Events:</h2>
                <section className="gridContainer bordered2">
                    <table id="events">
                        <thead>
                            <tr>
                                <th> </th>
                                <th> Event Title </th>
                                <th> Location </th>
                                <th> Date </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.events}
                        </tbody>
                    </table>
                </section>
    
    
                <h2>Non-Club Events:</h2>
                <section className="gridContainer bordered2">
                <table id="nonClub">
                    <thead>
                        <tr>
                            <th> </th>
                            <th> Event Title </th>
                            <th> Location </th>
                            <th> Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.nonClub}
                    </tbody>
                </table>
                </section>
    
    
            </main>
            <footer>
                    &copy; 2021 Adam Boyd
            </footer>
        </React.Fragment>;
    }
}

export default AdminActivity;