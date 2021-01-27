import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NHLHome = ({  }) => {


  return (
    <Fragment>
      <h2 className="my-2">NBA Home</h2>
      <table className="table">
        No games at this time
      </table>
    </Fragment>
  );
};



export default connect(null, { })(NHLHome);