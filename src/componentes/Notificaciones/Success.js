import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Success extends PureComponent {
    render() {
        return (
            <div className="alert alert-success" role="alert">
                Cambios realizados con exito.
            </div>
        );
    }
}



export default Success;