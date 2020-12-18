import React from 'react';
import ReactDOM from 'react-dom';

//I have not yet implemented the input fields,  they are currently just placeholders.

var submitInfo = function(){
    var response = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          }),
        body: JSON.stringify({
            name: 'France',
            capital: 'Paris',
            continent: 'Europe',
            hdi: '0.950'
        })
    };

    fetch( "http://localhost:3000/api/countries/", response)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.message);
        })
        .catch((error) => {
            console.error(error);
          });
}

var getAllCountries = function(){
    fetch( "http://localhost:3000/api/countries/" )
    .then( (response) => response.json() )
    .then( (responseJson) => {
        console.log(responseJson)
    })
    .catch((error) => {
        console.error(error);
      });
}

const username = <input type="text" placeholder="Username" />;
const password = <input type="text" placeholder="Password" />
const countryInput = {
    name: <input type="text" placeholder="Name" />,
    capital: <input type="text" placeholder="Capital" />,
    continent: <input type="text" placeholder="Continent" />,
    hdi: <input type="number" placeholder="HDI" />
}


const body = <div>
                <h1>CountryDB</h1>
                <br />
                {username}
                <br />
                {password}
                <br />
                <h2> Input country data</h2>
                {countryInput.name}
                {countryInput.capital}
                <br />
                {countryInput.continent}
                {countryInput.hdi}
                <br />
                <br />
                <button onClick={submitInfo}>Submit</button>
                <br />
                <br />
                <button onClick={getAllCountries}>Get all loaded countries</button>
             </div>;

//render everything
ReactDOM.render(body, document.getElementById('root'));