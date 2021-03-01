import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_NBA_GAMES,
  GAME_ERROR,
  GET_NBA_GAME,
} from './types';

// Get posts
export const getNbaGames = () => async dispatch => {
  try {
    const res = await api.get('/games/nba');

    dispatch({
      type: GET_NBA_GAMES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getNbaGame = id => async dispatch => {
  try {
    console.log('accttt');
    const res = await api.get(`/games/nba/${id}`);
    console.log('done');
    dispatch({
      type: GET_NBA_GAME,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
