import React from 'react';


function Activities(props) {
    let eventList = props.events.events.map(function (e){
        return <tr key={e.title}><td>{e.title}</td><td>{e.location}</td><td>{e.dateTime}</td></tr>;
    });

    let nonClubEventList = props.events.nonClubEvents.map(function (e){
        return <tr key={e.title}><td>{e.title}</td><td>{e.location}</td><td>{e.date}</td></tr>;
    });

    return <React.Fragment>
        <header>
            <h1>Club Activities</h1>
        </header>
        <main>
            <h2>Future Events:</h2>
            <table id="events">
                <thead>
                    <tr>
                        <th> Event Title </th>
                        <th> Location </th>
                        <th> Date / Time </th>
                    </tr>
                </thead>
                <tbody>
                    {eventList}
                </tbody>
            </table>
            <h2>Non-Club Events:</h2>
            <table id="nonClub">
                <thead>
                    <tr>
                        <th> Event Title </th>
                        <th> Location </th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody>
                    {nonClubEventList}
                </tbody>
            </table>
        </main>
        <footer>
                &copy; 2021 Adam Boyd
        </footer>
    </React.Fragment>;
}

export default Activities;