import React from "react";
import PropTypes from "prop-types";

const Row = ({left, right}) => {
    return(
        <React.Fragment>
            <div className="row mb2">
                <div className="col-md-6">
                    {left}
                </div>
                <div className="col-md-6">
                    {right}
                </div>
            </div>
        </React.Fragment>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row;