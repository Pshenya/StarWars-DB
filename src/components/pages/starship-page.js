import React from "react";
import { withRouter } from "react-router-dom";

import Row from "../row/row";
import { StarshipList } from "../sw-components/lists-of-items";
import StarshipDetails from "../sw-components/starship-details";

const PeoplePage = ({match, history}) => {

    const {id} = match.params;

    return (
        <Row left={<StarshipList onItemSelected={(id) => history.push(id)}/>}
             right={<StarshipDetails itemId={id}/>}/>
    )
}

export default withRouter(PeoplePage);