import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NBAHome = ({  }) => {


  return (
    <Fragment>
      <h2 className="my-2">NBA Home</h2>
      <table className="table">
        <Link to='/feb_3_21_76ersHornets' style={{color: 'inherit', fontSize: '20px'}}>
        	February 3, 2021: 76ers vs Hornets <br />
        </Link>
        <Link to='/feb_3_21_CelticsKings' style={{color: 'inherit', fontSize: '20px'}}>
        	February 3, 2021: Celtics vs Kings <br />
        </Link>
        <Link to='/feb_3_21_ClippersCavaliers' style={{color: 'inherit', fontSize: '20px'}}>
        	February 3, 2021: Clippers vs Cavaliers <br />
        </Link>
        <Link to='/feb_2_21_ClippersNets' style={{color: 'inherit', fontSize: '20px'}}>
        	February 2, 2021: Clippers vs Nets <br />
        </Link>
        <Link to='/feb_2_21_GrizzliesPacers' style={{color: 'inherit', fontSize: '20px'}}>
        	February 2, 2021: Grizzlies vs Pacers <br />
        </Link>
        <Link to='/feb_2_21_RaptorsMagic' style={{color: 'inherit', fontSize: '20px'}}>
        	February 2, 2021: Raptors vs Magic <br />
        </Link>
        <Link to='/feb_2_21_TrailBlazersWizards' style={{color: 'inherit', fontSize: '20px'}}>
        	February 2, 2021: Trail Blazers vs Wizards <br />
        </Link>
        <Link to='/feb_2_21_CelticsWarriors' style={{color: 'inherit', fontSize: '20px'}}>
        	February 2, 2021: Celtics vs Warriors <br />
        </Link>
        <Link to='/feb_2_21_PistonsJazz' style={{color: 'inherit', fontSize: '20px'}}>
        	February 2, 2021: Pistons vs Jazz <br />
        </Link>
        <Link to='/feb_1_21_LakersHawks' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Lakers vs Hawks <br />
        </Link>
        <Link to='/feb_1_21_HornetsHeat' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Hornets vs Heat <br />
        </Link>
        <Link to='/feb_1_21_KnicksBulls' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Knicks vs Bulls <br />
        </Link>
        <Link to='/feb_1_21_KingsPelicans' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Kings vs Pelicans <br />
        </Link>
        <Link to='/feb_1_21_RocketsThunder' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Rockets vs Thunder <br />
        </Link>
        <Link to='/feb_1_21_TimberwolvesCavaliers' style={{color: 'inherit', fontSize: '20px'}}>
        	February 1, 2021: Timberwolves vs Cavaliers <br />
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