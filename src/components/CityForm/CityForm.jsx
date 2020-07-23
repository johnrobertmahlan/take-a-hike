import React from 'react';

const CityForm = (props) => {
    return(
        <div>Enter A City: <br />
            <form onSubmit={props.updateCity}>
                <input value={props.city} onChange={props.handleEnterCity}/>
                <button>Enter</button>
            </form>
        </div>
    );
}

export default CityForm;