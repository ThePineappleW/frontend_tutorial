import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home.js';
import Login from './components/login.js';
import Database from './components/database.js';
import Inputs from './components/inputs.js';

/**
var submitInfo = function(){
    var request = {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Basic '+btoa('username:password'),
            'Content-Type': 'application/x-www-form-urlencoded'
          }),
        body: JSON.stringify({
            name: 'France',
            capital: 'Paris',
            continent: 'Europe',
            hdi: '0.950'
        })
    };

    fetch( "http://localhost:3000/api/countries/", request)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.message);
        })
        .catch((error) => {
            console.error(error);
          });
}

var getAllCountries = function(){
    var request = {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic '+btoa('username:password')
          }),
    };
    
    fetch( "http://localhost:3000/api/countries/", request )
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
**/

  

 

const routing = (
    <Router>
        <div>
            <h1>CountryDB</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/database">Database</Link></li>
            </ul>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/database" component={Database} />
        </div>
    </Router>
)


//render everything
ReactDOM.render(routing, document.getElementById('root'));