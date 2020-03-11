import React from "react";

import ItemList from "../item-list/item-list";
import WithData from "../hoc-helpers/with-data";
import WithSwapiService from "../hoc-helpers/with-swapi-service";
import WithChildFunction  from "../hoc-helpers/with-child-function";

const renderName = ({name}) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


const PersonList = WithSwapiService(mapPersonMethodsToProps)(
    WithData(
        WithChildFunction(renderName)(ItemList)));

const PlanetList = WithSwapiService(mapPlanetMethodsToProps)(
    WithData(
        WithChildFunction(renderName)(ItemList)));

const StarshipList = WithSwapiService(mapStarshipMethodsToProps)(
    WithData(
        WithChildFunction(renderName)(ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
}

