const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NhlGameSchema = new Schema({
  away_abbreviation: {
    type: String
  },
  home_win_percentage: {
    type: String
  },
  over_under: {
    type: String
  },
  home_votes: {
    type: String
  },
  home_primary_color: {
    type: String
  },
  away_moneyline: {
    type: String
  },
  location: {
    type: String
  },
  home_spread: {
    type: String
  },
  away_team_subtitle: {
    type: String
  },
  home_value: {
    type: String
  },
  away_primary_color: {
    type: String
  },
  home_name: {
    type: String
  },
  away_spread: {
    type: String
  },
  home_moneyline: {
    type: String
  },
  date: {
    type: String
  },
  away_predicted_score: {
    type: String
  },
  home_team_subtitle: {
    type: String
  },
  away_votes: {
    type: String
  },
  home_abbreviation: {
    type: String
  },
  away_value: {
    type: String
  },
  away_win_percentage: {
    type: String
  },
  away_name: {
    type: String
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  model_spread_record: {
    type: String
  },
  model_over_under_record: {
    type: String
  },
  home_trends: [
    {
      type: String,
    }
  ],
  away_trends: [
    {
      type: String,
    }
  ],
  best_home_moneyline_link: {
    type: String,
  },
  best_home_moneyline_price: {
    type: String,
  },
  best_home_moneyline_image: {
    type: String,
  },
  best_away_moneyline_link: {
    type: String,
  },
  best_away_moneyline_price: {
    type: String,
  },
  best_away_moneyline_image: {
    type: String,
  },
  best_away_spread_link: {
    type: String,
  },
  best_away_spread_number: {
    type: String,
  },
  best_away_spread_price: {
    type: String,
  },
  best_away_spread_image: {
    type: String,
  },
  best_under_link: {
    type: String,
  },
  best_under_number: {
    type: String,
  },
  best_under_price: {
    type: String,
  },
  best_under_image: {
    type: String,
  },
  best_over_link: {
    type: String,
  },
  best_over_number: {
    type: String,
  },
  best_over_price: {
    type: String,
  },
  best_over_image: {
    type: String,
  },
  time_created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('nhlgame', NhlGameSchema);