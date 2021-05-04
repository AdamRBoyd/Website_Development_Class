import React from 'react';


function Activities(props) {
    let events = props.events.map(function (e){
        return <tr key={e.title}><td>{e.title}</td><td>{e.location}</td><td>{e.dateTime}</td></tr>;
    });

    let nonClub = props.nonclub.map(function (e){
        return <tr key={e.title}><td>{e.title}</td><td>{e.location}</td><td>{e.dateTime}</td></tr>;
    });

    return <React.Fragment>
        <header>
            <h1>Club Activities</h1>
        </header>
        <main>
            <h2>Future Events:</h2>
            <section className="gridContainer bordered2">
                <table id="events">
                    <thead>
                        <tr>
                            <th> Event Title </th>
                            <th> Location </th>
                            <th> Date / Time </th>
                        </tr>
                    </thead>
                    <tbody>
                        {events}
                    </tbody>
                </table>
            </section>


            <h2>Non-Club Events:</h2>
            <section className="gridContainer bordered2">
                <table id="nonClub">
                    <thead>
                        <tr>
                            <th> Event Title </th>
                            <th> Location </th>
                            <th> Date / Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nonClub}
                    </tbody>
                </table>
            </section>

        </main>
        <footer>
                &copy; 2021 Adam Boyd
        </footer>
    </React.Fragment>;
}

export default Activities;