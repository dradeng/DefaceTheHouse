import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { logout } from '../../actions/auth';
import logo from '../../img/wreck.png';

const Footer = ({ }) => {



  return (
    <div style={{textAlign: 'center', backgroundColor: '#A8A8A8', padding: '20px', color: 'white', fontWeight: '700'}}>
      <div>
        <div style={{ width: '200px', display: 'inline-block'}}>
          <div style={{margin: '20px', display: 'block', color: 'inherit'}}>Top Sportsbooks</div>
          <div style={{margin: '20px', display: 'block', color: 'inherit'}}>Sportsbook Reviews</div>
        </div>
        <div style={{ width: '200px', display: 'inline-block'}}>
          <Link style={{margin: '20px', display: 'block', color: 'inherit'}}>Computer Model</Link>
          <Link to='about-us' style={{margin: '20px', display: 'block', color: 'inherit'}}>About Us</Link>
        </div>
      </div>
      <div style={{marginTop: '20px'}}>Copyright &#169; 2021 DefaceTheHouse</div>
    </div>
  );
};

export default connect( null, { })(Footer);