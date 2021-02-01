import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NBAHome = ({  }) => {


  return (
    <Fragment>
      <h2 className="my-2">NBA Home</h2>
      <table className="table">
        <Link to='/feb_1_21_LakersHawks' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Lakers vs Hawks <br />
        </Link>
        <Link to='/jan_31_21_HornetsHeat' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Charlotte Hornets vs Miami Heat <br />
        </Link>
        <Link to='/jan_31_21_76ersPacers' style={{color: 'inherit', fontSize: '20px'}}>
        	January 31, 2021: 76ers vs Pacers <br />
        </Link>
        <Link to='/jan_31_21_CavaliersTimberwolves' style={{color: 'inherit', fontSize: '20px'}}>
        	January 31, 2021: Cavaliers vs Timberwolves <br />
        </Link>
        <Link to='/jan_31_21_ClippersKnicks' style={{color: 'inherit', fontSize: '20px'}}>
        	January 31, 2021: Clippers vs Knicks <br />
        </Link>
        <Link to='/jan_31_21_JazzNuggets' style={{color: 'inherit', fontSize: '20px'}}>
        	January 31, 2021: Jazz vs Nuggets <br />
        </Link>
        <Link to='/jan_31_21_MagicRaptors' style={{color: 'inherit', fontSize: '20px'}}>
        	January 31, 2021: Magic vs Raptors <br />
        </Link>
        <Link to='/jan_31_21_NetsWizards' style={{color: 'inherit', fontSize: '20px'}}>
        	January 31, 2021: Nets vs Wizards <br />
        </Link>
      </table>
    </Fragment>
  );
};



export default connect(null, { })(NBAHome);