import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NcaabGameItem from './NcaabGameItem';
import { getNcaabGames } from '../../actions/game';

const NcaabGames = ({ getNcaabGames, ncaabGame: { ncaabGames } }) => {
  useEffect(() => {
    getNcaabGames();
  }, [getNcaabGames]);

  return (
    <Fragment>
      <h1>NCAAB Games</h1>
      <div className="posts">
        {ncaabGames.map((ncaabGame) => (
          <Link to={`/ncaab/${ncaabGame._id}`}>

            <NcaabGameItem key={ncaabGame._id} ncaabGame={ncaabGame} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

NcaabGames.propTypes = {
  getNcaabGames: PropTypes.func.isRequired,
  ncaabGame: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  ncaabGame: state.game
});

export default connect(mapStateToProps, { getNcaabGames })(NcaabGames);