import React from "react";
import {withRouter} from "react-router-dom";

import Row from "../row/row";
import { PersonList } from "../sw-components/lists-of-items";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({match, history}) => {

    const {id} = match.params;

    return (
        <Row left={<PersonList onItemSelected={(id) => history.push(id)}/>}
             right={<PersonDetails itemId={id}/>}/>
    )
}

export default withRouter(PeoplePage);