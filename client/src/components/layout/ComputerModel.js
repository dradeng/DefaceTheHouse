import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const ComputerModel = ({
 
}) => {
  

  return (
    <Fragment>
      <h1 style={{marginTop: '40px'}} className="large">Computer Model</h1>
      <p className="lead">
        Our computer model simulates 1000 game scenarios and takes the average. 
        The model uses data from previous games as a team, for specific players, weather, social media sentiment,
        player interview analysis, other model predictions, trends, player statuses, team stats, and coaching analysis.
        We plan to expand the model to the NBA, NHL, MLB, and other sports soon as we feel confident about them.
      </p>
      
    </Fragment>
  );
};

export default connect(null, { })(
  ComputerModel
);