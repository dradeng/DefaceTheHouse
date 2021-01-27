import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { logout } from '../../actions/auth';
import logo from '../../img/wreck.png';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {

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
        showSports: !showSports,
        showPicks: false,
        showBetting: false,
    });
  }
  const changePicks = () => {
    setFormData({
        ...formData,
        showPicks: !showPicks,
        showBetting: false,
        showSports: false,
    });
  }
  const changeBetting = () => {
    setFormData({
        ...formData,
        showBetting: !showBetting,
        showPicks: false,
        showSports: false,
    });
  }
  const closeDropdowns = () => {
    setFormData({
        ...formData,
        showBetting: false,
        showPicks: false,
        showSports: false,
    });
  }
  
  const links = (
    <ul style={{verticalAlign: 'middle', marginRight: '100px'}}>
      <li style={{ width: '100px'}}>
        <div style={{height: '1px',}}>
          <Link style={{fontWeight: '700'}} onClick={() => changeSports()}>SPORTS</Link>
          <div style={{display: showSports ? 'inline-block' : 'none', visible: 'auto', fontWeight: '700', backgroundColor: '#F7F6F4', color: '#000000', borderRadius: '15px'}}>
            <Link onClick={() => closeDropdowns()} to="/nfl" style={{ margin: '20px', display: 'block', color: '#000000'}}>NFL</Link>
            <Link onClick={() => closeDropdowns()} to="/ncaaf" style={{ margin: '20px', display: 'block', color: '#000000'}}>NCAAF</Link>
            <Link onClick={() => closeDropdowns()} to="/nba" style={{ margin: '20px', display: 'block', color: '#000000'}}>NBA</Link>
            <Link onClick={() => closeDropdowns()} to="/mlb" style={{ margin: '20px', display: 'block', color: '#000000'}}>MLB</Link>
            <Link onClick={() => closeDropdowns()} to="/nhl" style={{ margin: '20px', display: 'block', color: '#000000'}}>NHL</Link>
          </div>
        </div>
      </li>
      <li style={{ width: '100px'}}>
        <div style={{height: '1px',}}>
          <Link style={{fontWeight: '700'}} onClick={() => changePicks()}>PICKS</Link>
          <div style={{display: showPicks ? 'inline-block' : 'none', visible: 'auto', fontWeight: '700', backgroundColor: '#F7F6F4', color: '#000000', borderRadius: '15px'}}>
            <Link onClick={() => closeDropdowns()} to="/nfl" style={{ margin: '20px', display: 'block', color: '#000000'}}>NFL</Link>
            <Link onClick={() => closeDropdowns()} to="/ncaaf" style={{ margin: '20px', display: 'block', color: '#000000'}}>NCAAF</Link>
            <Link onClick={() => closeDropdowns()} to="/nba" style={{ margin: '20px', display: 'block', color: '#000000'}}>NBA</Link>
            <Link onClick={() => closeDropdowns()} to="/mlb" style={{ margin: '20px', display: 'block', color: '#000000'}}>MLB</Link>
            <Link onClick={() => closeDropdowns()} to="/nhl" style={{ margin: '20px', display: 'block', color: '#000000'}}>NHL</Link>
          </div>
        </div>
      </li>
      <li style={{ width: '100px'}}>
        <div style={{height: '1px',}}>
          <Link style={{fontWeight: '700'}} onClick={() => changeBetting()}>BETTING</Link>
          <div style={{display: showBetting ? 'inline-block' : 'none', visible: 'auto', width: '200px',fontWeight: '700', backgroundColor: '#F7F6F4', color: '#000000', borderRadius: '15px'}}>
            <Link onClick={() => closeDropdowns()} to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>Betting Sites By Region</Link>
            <Link onClick={() => closeDropdowns()} to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>Betting Sites By Sport</Link>
            <Link onClick={() => closeDropdowns()} to="/" style={{ margin: '20px', display: 'block', color: '#000000'}}>Online Sportsbook</Link>
          </div>
        </div>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark" style={{height: '100px', backgroundColor: '#A8A8A8'}}>
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
