import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { logout } from '../../actions/auth';
import logo from '../../img/wreck.png';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const sportsOptions = [
    { value: 'NFL', label: 'NFL' },
    { value: 'NCAAF', label: 'NCAAF' },
    { value: 'NBA', label: 'NBA' },
    { value: 'MLB', label: 'MLB' },
    { value: 'NHL', label: 'NHL' },
  ];
  const picksOptions = [
    { value: 'NFL', label: 'NFL' },
    { value: 'NCAAF', label: 'NCAAF' },
    { value: 'NBA', label: 'NBA' },
    { value: 'MLB', label: 'MLB' },
    { value: 'NHL', label: 'NHL' },
  ]
  const bettingOptions = [
    { value: 'BettingSitesByRegion', label: 'Betting Sites By Region' },
    { value: 'BettingSitesBySport', label: 'BettingSites By Sport' },
    { value: 'OnlineSportsbook', label: 'Online Sportsbook' },
  ];
  const [formData, setFormData] = useState({
    showPicks: false,
    showBetting: false,
    showSports: false
  });

  const {
    showPicks,
    showBetting,
    showSports,
  } = formData;


  const changeSports = () => {
    setFormData({
        ...formData,
        showSports: !showSports
    });
  }
  const changePicks = () => {
    setFormData({
        ...formData,
        showPicks: !showPicks
    });
  }
  const changeBetting = () => {
    setFormData({
        ...formData,
        showBetting: !showBetting
    });
  }
  
  const links = (
    <ul style={{verticalAlign: 'middle'}}>
      <li style={{ width: '100px'}}>
        <div style={{height: '1px',}}>
          <div onClick={() => changeSports()}>SPORTS</div>
          <div style={{display: showSports ? 'inline-block' : 'none', visible: 'auto', fontWeight: '700', backgroundColor: '#F7F6F4', color: '#000000', borderRadius: '15px'}}>
            <Link to="/nfl" style={{ margin: '20px', display: 'block', color: '#000000'}}>NFL</Link>
            <Link to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>NCAAF</Link>
            <Link to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>NBA</Link>
            <Link to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>MLB</Link>
            <Link to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>NHL</Link>
          </div>
        </div>
      </li>
      <li style={{ width: '100px'}}>
        <div style={{height: '1px',}}>
          <div onClick={() => changePicks()}>PICKS</div>
          <div style={{display: showPicks ? 'inline-block' : 'none', visible: 'auto', fontWeight: '700', backgroundColor: '#F7F6F4', color: '#000000', borderRadius: '15px'}}>
            <div style={{ margin: '20px'}}>NFL</div>
            <div style={{ margin: '20px'}}>NCAAF</div>
            <div style={{ margin: '20px'}}>NBA</div>
            <div style={{ margin: '20px'}}>MLB</div>
            <div style={{ margin: '20px'}}>NHL</div>
          </div>
        </div>
      </li>
      <li style={{ width: '100px'}}>
        <div style={{height: '1px',}}>
          <div onClick={() => changeBetting()}>BETTING</div>
          <div style={{display: showBetting ? 'inline-block' : 'none', visible: 'auto', fontWeight: '700', backgroundColor: '#F7F6F4', color: '#000000', borderRadius: '15px'}}>
            <div style={{ margin: '20px'}}>NFL</div>
            <div style={{ margin: '20px'}}>NCAAF</div>
            <div style={{ margin: '20px'}}>NBA</div>
            <div style={{ margin: '20px'}}>MLB</div>
            <div style={{ margin: '20px'}}>NHL</div>
          </div>
        </div>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark" style={{height: '100px', backgroundColor: '#00BFFF'}}>
      <h1>
        <Link to="/">
          <img
            style={{width: '30px', height: '30px',marginBottom: '-2px', marginRight: '10px'}}
            src={logo}
          />
          DefaceTheHouse
        </Link>
      </h1>
      <Fragment>{links}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
