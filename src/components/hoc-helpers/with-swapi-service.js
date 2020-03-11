import React from "react";

import { ServiceConsumer } from "../service-context/service-context";

const WithSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {(swapiService) => {
                    const serviceProps = mapMethodsToProps(swapiService);
                    return (
                        <Wrapped {...props} {...serviceProps}/>
                    )
                }}
            </ServiceConsumer>
        )
    }

}

export default WithSwapiService;