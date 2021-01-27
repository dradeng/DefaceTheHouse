import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NCAAFHome = ({  }) => {


  return (
    <Fragment>
      <h2 className="my-2">NCAAF Home</h2>
      <table className="table">
        No games at this time
      </table>
    </Fragment>
  );
};



export default connect(null, { })(NCAAFHome);