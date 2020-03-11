import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import WithSwapiService from '../hoc-helpers/with-swapi-service';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);