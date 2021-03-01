import {
  GET_NBA_GAMES,
  GAME_ERROR,
  GET_NBA_GAME,
} from '../actions/types';

const initialState = {
  nbaGames: [],
  nbaGame: null,
  loading: true,
  error: {}
};

function gameReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NBA_GAMES:
      return {
        ...state,
        nbaGames: payload,
        loading: false
      };
    case GET_NBA_GAME:
      return {
        ...state,
        nbaGame: payload,
        loading: false
      };
    
    case GAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default gameReducer;
