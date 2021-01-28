import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const TopSportsbook = ({
 
}) => {
  

  return (
    <Fragment style={{height: '100vh'}}>
      <h1 style={{marginTop: '40px'}} className="large">Top Sportsbook</h1>
      <p className="lead">
        Coming Soon!!
      </p>
      
    </Fragment>
  );
};

export default connect(null, { })(
  TopSportsbook
);