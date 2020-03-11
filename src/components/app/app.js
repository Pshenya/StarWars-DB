import React, { Component } from 'react';
import './bootstrap.min.css';

import Header from '../header/header';
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundry from "../error-boundry/error-boundry";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ServiceProvider } from "../service-context/service-context";

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false,
        backgroundColor: '#272b30'
    }

    render() {
        return (
            <ErrorBoundry>
                <ServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet/>
                            <Switch>
                                <Route path="/" render={() => <h1>Welcome</h1>}
                                       exact/>
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetPage}/>
                                <Route path="/starships/:id?" component={StarshipPage}></Route>
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>

                        </div>
                    </Router>
                </ServiceProvider>
            </ErrorBoundry>
        );
    }
}