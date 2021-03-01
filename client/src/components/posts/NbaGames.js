import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NbaGameItem from './NbaGameItem';
import { getNbaGames } from '../../actions/game';

const NbaGames = ({ getNbaGames, nbaGame: { nbaGames } }) => {
  useEffect(() => {
    getNbaGames();
  }, [getNbaGames]);

  return (
    <Fragment>
      <h1>NBA Games</h1>
      <div className="posts">
        {nbaGames.map((nbaGame) => (
          <Link to={`/nba/${nbaGame._id}`}>

            <NbaGameItem key={nbaGame._id} nbaGame={nbaGame} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

NbaGames.propTypes = {
  getNbaGames: PropTypes.func.isRequired,
  nbaGame: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  nbaGame: state.game
});

export default connect(mapStateToProps, { getNbaGames })(NbaGames);
