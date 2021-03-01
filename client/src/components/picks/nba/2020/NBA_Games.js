import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './NBAItem';
import { get_NBA_Games } from '../../actions/games';

const NBA_Games = ({ get_NBA_Games, nba_game: { nba_games } }) => {
  useEffect(() => {
    get_NBA_Games();
  }, [get_NBA_Games]);

  return (
    <Fragment>
      <h1 className="large text-primary">NBA Games</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
     
      <div className="posts">
        {nba_games.map((nba_game) => (
          <Link to=''>
            <NBA_Item key={nba_game._id} nba_game={nba_game} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

NBA_Games.propTypes = {
  get_NBA_Games: PropTypes.func.isRequired,
  nba_game: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  nba_game: state.nba_game
});

export default connect(mapStateToProps, { get_NBA_Games })(NBA_Games);