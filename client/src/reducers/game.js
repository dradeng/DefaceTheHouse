import {
  GET_NBA_GAMES,
  GET_NBA_GAME,
  GET_NCAAB_GAMES,
  GET_NCAAB_GAME,
  GAME_ERROR,
} from '../actions/types';

const initialState = {
  nbaGames: [],
  nbaGame: null,
  ncaabGames: [],
  ncaabGame: null,
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
    case GET_NCAAB_GAMES:
      return {
        ...state,
        ncaabGames: payload,
        loading: false
      };
    case GET_NCAAB_GAME:
      return {
        ...state,
        ncaabGame: payload,
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
