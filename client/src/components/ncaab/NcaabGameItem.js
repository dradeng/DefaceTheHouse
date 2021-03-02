import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';

const NcaabGameItem = ({
  ncaabGame: {
    away_abbreviation,
    home_win_percentage,
    over_under,
    home_votes,
    home_primary_color,
    away_moneyline,
    location,
    home_spread,
    away_team_subtitle,
    home_value,
    away_primary_color,
    home_name,
    away_spread,
    home_moneyline,
    date,
    away_predicted_score,
    home_team_subtitle,
    away_votes,
    home_abbreviation,
    away_value,
    away_win_percentage,
    away_name 
  }
}) => { 


  return (
  

  <div className="bg-white p-1 my-1">
    <div>
      <div>{date}: {home_name} vs {away_name}</div>
      <div style={{fontWeight: '700', fontSize: '12px'}}>
        <div style={{display: 'inline-block', padding: '0px 10px'}}>Spread: {home_abbreviation} {home_spread}</div>
        <div style={{display: 'inline-block'}}>Over/Under: {over_under}</div>
      </div>
    </div>
  </div>
);};

NcaabGameItem.propTypes = {
  ncaabGame: PropTypes.object.isRequired,
};


export default NcaabGameItem;