import React from 'react';

function StateViewer(props) {
    let statesList = [];
    function makeList(e){
        return <details key={e.state}>
                    <summary>{e.state}</summary>
                    <p><label>code: </label>{e.code}</p>
                    <p><label>capital_city: </label>{e.capital_city}</p>
                </details>
    }

    if(props.filter){
        statesList = props.states.map(function(e){
            if(e.population > 10000000){
                return makeList(e)
            }
            else {
                return;
            }
        });
    }
    else {
        statesList = props.states.map(function(e){
            return makeList(e)
        });
    }

    return(
        <section className="StateViewer">
            {statesList}
        </section>
    );
}

export default StateViewer;