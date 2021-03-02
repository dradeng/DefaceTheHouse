const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const NbaGame = require('../../models/NbaGame');
const NcaabGame = require('../../models/NcaabGame');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');



// @route    POST api/games/nba
// @desc     Create a post
// @access   Private
router.post(
  '/nba',
  async (req, res) => {
   
    try {
   

      const newGame = new NbaGame({
        away_abbreviation:"DET",
        home_win_percentage:"57.8%",
        home_predicted_score:"116.0",
        over_under:"219",
        home_votes: "50",
        home_primary_color:"#00275D",
        away_moneyline:"-185",
        location:"February 19, 2021, 8:00 PM ET",
        home_spread:"+4.5",
        away_team_subtitle:"8-20 (14-11-3 ATS)",
        home_value:"-4.5",
        away_primary_color:"#0056A4",
        home_name:"Memphis Grizzlies",
        away_spread:"-4.5",
        home_moneyline:"+165",
        date:"February 19, 2021, 8:00 PM ET",
        away_predicted_score:"112.9",
        home_team_subtitle:"12-12 (12-11-1 ATS)",
        away_votes: "50",
        home_abbreviation:"MEM","away_value":"+4.5",
        away_win_percentage:"42.2%",
        away_name:"Detroit Pistons"
      });


      const game = await newGame.save();

      res.json(game);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/games/nba
// @desc     Get all nba games
// @access   Private
router.get('/nba', async (req, res) => {
  try {
    const nbaGames = await NbaGame.find().sort({ date: -1 });
 
    res.json(nbaGames);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/games/nba/:id
// @desc     Get post by ID
// @access   Private
router.get('/nba/:id', checkObjectId('id'), async (req, res) => {
  try {
    const nbaGame = await NbaGame.findById(req.params.id);

    if (!nbaGame) {
      return res.status(404).json({ msg: 'NBA Game not found' });
    }
    console.log('finidng game');
    console.log(nbaGame);
    res.json(nbaGame);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    GET api/games/ncaab
// @desc     Get all ncaab games
// @access   Private
router.get('/ncaab', async (req, res) => {
  try {
    const ncaabGames = await NcaabGame.find().sort({ date: -1 });
 
    res.json(ncaabGames);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/games/nba/:id
// @desc     Get post by ID
// @access   Private
router.get('/ncaab/:id', checkObjectId('id'), async (req, res) => {

  console.log('trying to fin');
  try {
    const ncaabGame = await NcaabGame.findById(req.params.id);

    if (!ncaabGame) {
      return res.status(404).json({ msg: 'NCAAB Game not found' });
    }

    res.json(ncaabGame);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});




module.exports = router;