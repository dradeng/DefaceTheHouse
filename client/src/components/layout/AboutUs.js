import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

const AboutUs = ({
 
}) => {
  

  return (
    <Fragment style={{height: '100vh'}}>
      <Helmet>
            <title>About Us</title>
      </Helmet>
      <h1 style={{marginTop: '40px'}} className="large">About Us</h1>
      <p className="lead">
        Deface The House is a bettors paradise of knowledge – we give you the resources to take down any sportsbook. A resource for fans, 
        bettors and media outlets looking for wagering information on all the sports and pop culture events you could want.

        With the latest odds, trends and information on everything from the NFL, NCAAF, MLB, NBA, NHL and soon to be other sports, 
        Deface The House is going to be the premier news outlet in the sports betting industry. We have odds from around the globe, 
        giving you the opportunity to seek out the best sports betting information along with our recommendations for the best online 
        sportsbooks on the planet. Fans and media outlets alike have access to decades of statistics and trends from our easily accessible databases.</p>
      
    </Fragment>
  );
};

export default connect(null, { })(
  AboutUs
);